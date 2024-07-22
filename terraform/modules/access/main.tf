resource "azurerm_user_assigned_identity" "backend" {
  name                = "id-${var.app}-backend-${var.env}"
  resource_group_name = var.resource_group_name
  location            = var.location
}

resource "azurerm_user_assigned_identity" "frontend" {
  name                = "id-${var.app}-frontend-${var.env}"
  resource_group_name = var.resource_group_name
  location            = var.location
}

resource "azurerm_role_assignment" "acr_pull_backend" {
  scope                = var.container_registry_id
  role_definition_name = "acrpull"
  principal_id         = azurerm_user_assigned_identity.backend.principal_id
}

resource "azurerm_role_assignment" "acr_pull_frontend" {
  scope                = var.container_registry_id
  role_definition_name = "acrpull"
  principal_id         = azurerm_user_assigned_identity.frontend.principal_id
}


resource "azurerm_role_assignment" "user_key_vault" {
  scope                = var.key_vault_id
  role_definition_name = "Key Vault Secrets User"
  principal_id         = azurerm_user_assigned_identity.backend.principal_id
}

resource "azurerm_role_assignment" "admin_key_vault" {
  scope                = var.resource_group_id
  role_definition_name = "Key Vault Administrator"
  principal_id         = var.azure_current_object_id
}