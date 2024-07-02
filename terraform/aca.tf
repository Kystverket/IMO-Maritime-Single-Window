
resource "azurerm_container_app_environment" "imo_dev_app" {
  name                       = "cae-${local.stack}"
  location                   = var.location
  resource_group_name        = "rg-imo-msw-terraform-dev-preview"
  log_analytics_workspace_id = azurerm_log_analytics_workspace.imo_dev_app.id

  tags = local.default_tags
}

resource "azurerm_user_assigned_identity" "imo_dev_app" {
  location            = var.location
  name                = "micontainerapp"
  resource_group_name = "rg-imo-msw-terraform-dev-preview"
}


resource "azurerm_role_assignment" "imo_dev_app" {
  scope                = data.azurerm_container_registry.acr.id
  role_definition_name = "acrpull"
  principal_id         = azurerm_user_assigned_identity.imo_dev_app.principal_id
  depends_on = [
    azurerm_user_assigned_identity.imo_dev_app
  ]
}

data "azurerm_container_registry" "acr" {
  name                = "tamopsactionacr"
  resource_group_name = "rg-imo-msw-terraform-dev-preview"
}



resource "azurerm_container_app" "imo_dev_app" {
  name                         = "ca-${local.stack}"
  container_app_environment_id = azurerm_container_app_environment.imo_dev_app.id
  resource_group_name          = "rg-imo-msw-terraform-dev-preview"
  revision_mode                = "Single"

  identity {
    type         = "UserAssigned"
    identity_ids = [azurerm_user_assigned_identity.imo_dev_app.id]
  }
 
  registry {
    server   = data.azurerm_container_registry.acr.login_server
    identity = azurerm_user_assigned_identity.imo_dev_app.id
  }

  template {
    container {
      name   = "backend"
      image  = "mcr.microsoft.com/dotnet/core/sdk:2.2"
      cpu    = 0.25
      memory = "0.5Gi"
    }
    container {
      name   = "frontend"
      image  = "node:10.24-slim"
      cpu = 0.25
      memory = "0.5Gi"
    }
  }
  tags = local.default_tags
}
