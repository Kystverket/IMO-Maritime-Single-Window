locals {
  stack = "${var.app}-${var.env}"

  default_tags = {
    environment = var.env
    app         = var.app
  }

}

data "azurerm_resource_group" "imo_dev_app" {
  name = "rg-imo-msw-terraform-dev-preview"
}


resource "azurerm_log_analytics_workspace" "imo_dev_app" {
  name                = "log-${local.stack}"
  location            = var.location
  resource_group_name = data.azurerm_resource_group.imo_dev_app.name
  tags = local.default_tags
}

data "azurerm_client_config" "current" {}

resource "random_password" "db_password" {
  length = 16
  special = true
  override_special = "_%@"
}

resource "azurerm_key_vault" "imo_dev_app" {
  name                        = "imo-dev-keyvault"
  location                    = var.location
  resource_group_name         = data.azurerm_resource_group.imo_dev_app.name
  enabled_for_disk_encryption = true
  tenant_id                   = data.azurerm_client_config.current.tenant_id
  soft_delete_retention_days  = 7
  purge_protection_enabled    = true
  sku_name = "standard"

  enable_rbac_authorization   = true
}

resource "azurerm_key_vault_secret" "db_password" {
  name         = "secret-sauce"
  value        = random_password.db_password.result
  key_vault_id = azurerm_key_vault.imo_dev_app.id
  depends_on = [ azurerm_role_assignment.key_vault_access_user_assigned ]
}


resource "azurerm_user_assigned_identity" "imo_dev_app" {
  location            = var.location
  name                = "micontainerapp"
  resource_group_name = data.azurerm_resource_group.imo_dev_app.name
}

resource "azurerm_role_assignment" "acr_pull" {
  scope                = data.azurerm_container_registry.acr.id
  role_definition_name = "acrpull"
  principal_id         = azurerm_user_assigned_identity.imo_dev_app.principal_id
  depends_on = [
    azurerm_user_assigned_identity.imo_dev_app
  ]
}


resource "azurerm_role_assignment" "key_vault_access_user_assigned" {
  scope                = azurerm_key_vault.imo_dev_app.id
  role_definition_name = "Key Vault Secrets User"
  principal_id         = azurerm_user_assigned_identity.imo_dev_app.principal_id
  depends_on = [
    azurerm_user_assigned_identity.imo_dev_app,
    azurerm_key_vault.imo_dev_app
  ]
}