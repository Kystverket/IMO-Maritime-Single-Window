resource "azurerm_key_vault" "imo_dev_app" {
  name                        = "imo-msw-dev-keyvault"
  location                    = var.location
  resource_group_name         = azurerm_resource_group.imo_dev_app.name
  enabled_for_disk_encryption = true
  tenant_id                   = data.azurerm_client_config.current.tenant_id
  soft_delete_retention_days  = 7
  purge_protection_enabled    = true
  sku_name                    = "standard"

  enable_rbac_authorization   = true

  depends_on = [
    azurerm_role_assignment.devops_key_vault
   ]
}

resource "random_password" "db_password" {
  length = 16
  special = true
  override_special = "_%@"
}

resource "azurerm_key_vault_secret" "db_password" {
  name         = "secret-sauce"
  value        = random_password.db_password.result
  key_vault_id = azurerm_key_vault.imo_dev_app.id
}