resource "azurerm_user_assigned_identity" "imo_dev_app" {
  location            = var.location
  name                = "micontainerapp"
  resource_group_name = azurerm_resource_group.imo_dev_app.name
}

resource "azurerm_role_assignment" "acr_pull" {
  scope                = azurerm_container_registry.acr.id
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

locals {
  key_vault_admin = "Key Vault Administrator"
}

resource "azurerm_role_assignment" "devops_key_vault" {
  scope                = azurerm_resource_group.imo_dev_app.id
  role_definition_name = local.key_vault_admin
  principal_id         = data.azurerm_client_config.current.object_id
}