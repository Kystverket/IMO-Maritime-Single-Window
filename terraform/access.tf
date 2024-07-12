resource "azurerm_role_assignment" "acr_pull" {
  scope                = azurerm_container_registry.acr.id
  role_definition_name = "acrpull"
  principal_id         = azurerm_user_assigned_identity.imo_dev_app.principal_id
  depends_on = [
    azurerm_user_assigned_identity.imo_dev_app
  ]
}

resource "azurerm_role_assignment" "devops_key_vault" {
  scope                = azurerm_resource_group.imo_dev_app.id
  role_definition_name = "Key Vault Administrator"
  principal_id         = data.azurerm_client_config.current.object_id
}

resource "azurerm_role_assignment" "mi_key_vault_access" {
  scope                = azurerm_key_vault.imo_dev_app.id
  role_definition_name = "Key Vault Secrets User"
  principal_id         = azurerm_user_assigned_identity.imo_dev_app.principal_id
}

resource "azurerm_user_assigned_identity" "imo_dev_app" {
  name                = "id-imo-msw-backend-dev-preview"
  resource_group_name = azurerm_resource_group.imo_dev_app.name
  location            = azurerm_resource_group.imo_dev_app.location
}