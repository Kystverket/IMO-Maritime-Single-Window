resource "random_password" "db_password" {
  length = 16
  special = true
  override_special = "_%@"
}

resource "azurerm_key_vault" "imo_dev_app" {
  name                        = "imo-dev-keyvault"
  location                    = var.location
  resource_group_name         = azurerm_resource_group.imo_dev_app.name
  enabled_for_disk_encryption = true
  tenant_id                   = data.azurerm_client_config.current.tenant_id
  soft_delete_retention_days  = 7
  purge_protection_enabled    = true
  sku_name                    = "standard"
  access_policy {
    tenant_id = data.azurerm_client_config.current.tenant_id
    object_id = data.azurerm_client_config.current.object_id

    key_permissions = ["Get", "Set", "Delete"]

    secret_permissions = ["Get", "Set", "Delete"]

    storage_permissions = ["Get", "Set", "Delete"]
  }
  access_policy {
    tenant_id = data.azurerm_client_config.current.tenant_id
    object_id = azurerm_user_assigned_identity.imo_dev_app.principal_id

    secret_permissions =["Get", "Set", "Delete"]
    key_permissions = ["Get", "Set", "Delete"]

    storage_permissions = ["Get", "Set", "Delete"]
  }
#   enable_rbac_authorization   = true

#   depends_on = [
#     azurerm_role_assignment.devops_key_vault
#   ]
}

resource "azurerm_key_vault_secret" "db_password" {
  name         = "secret-sauce"
  value        = random_password.db_password.result
  key_vault_id = azurerm_key_vault.imo_dev_app.id
}