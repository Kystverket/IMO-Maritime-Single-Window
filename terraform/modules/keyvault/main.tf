resource "azurerm_key_vault" "imo_app" {
  name                        = "kv-${var.app}-${var.env}"
  location                    = var.location
  resource_group_name         = var.resource_group_name
  enabled_for_disk_encryption = true
  tenant_id                   = var.azure_current_tenant_id
  soft_delete_retention_days  = 7
  purge_protection_enabled    = true
  sku_name                    = "standard"

  enable_rbac_authorization = true

  depends_on = [
    var.keyvault_role_assignment
  ]
}

resource "random_password" "db_password" {
  length           = 16
  special          = true
  override_special = "_%@"
}

resource "random_password" "appsettings_secret" {
  length           = 16
  special          = true
  override_special = "_%@"
}

resource "azurerm_key_vault_secret" "db_password" {
  name         = "kvs-${var.app}-db-${var.env}"
  value        = random_password.db_password.result
  key_vault_id = azurerm_key_vault.imo_app.id
}

resource "azurerm_key_vault_secret" "appsettings_secret" {
  name         = "kvs-${var.app}-appsettings-${var.env}"
  value        = random_password.appsettings_secret.result
  key_vault_id = azurerm_key_vault.imo_app.id
}