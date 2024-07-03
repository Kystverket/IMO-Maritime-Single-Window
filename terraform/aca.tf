resource "azurerm_container_app_environment" "imo_dev_app" {
  name                       = "cae-${local.stack}"
  location                   = var.location
  resource_group_name        = data.azurerm_resource_group.imo_dev_app.name
  log_analytics_workspace_id = azurerm_log_analytics_workspace.imo_dev_app.id

  tags = local.default_tags
}

resource "azurerm_user_assigned_identity" "imo_dev_app" {
  location            = var.location
  name                = "micontainerapp"
  resource_group_name = data.azurerm_resource_group.imo_dev_app.name
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
  name                = "crimomsw"
  resource_group_name = data.azurerm_resource_group.imo_dev_app.name
}

resource "azurerm_container_app" "imo_dev_app" {
  name                         = "ca-${local.stack}"
  container_app_environment_id = azurerm_container_app_environment.imo_dev_app.id
  resource_group_name          = data.azurerm_resource_group.imo_dev_app.name
  revision_mode                = "Single"

  identity {
    type         = "UserAssigned"
    identity_ids = [azurerm_user_assigned_identity.imo_dev_app.id]
  }
 
  registry {
    server   = data.azurerm_container_registry.acr.login_server
    identity = azurerm_user_assigned_identity.imo_dev_app.id
  }

  ingress {
    allow_insecure_connections = false
    external_enabled = true
    target_port = 80
    traffic_weight {
      percentage = 100
      revision_suffix = "imo-msw-dev-preview-1234"
    }
  }
  
  template {
    container {
      name   = "backend"
      image  =  "${data.azurerm_container_registry.acr.login_server}/dotnet2.2crimomsw:v1"
      cpu    = 0.25
      memory = "0.5Gi"
    }

    container {
      name   = "frontend"
      image  = "${data.azurerm_container_registry.acr.login_server}/node_crimomsw:v1"
      cpu = 0.25
      memory = "0.5Gi"
      env {
        name  = "BACKEND_URL"
        value = "http://backend.devcontainer:5000"
      }
    }
  }

  tags = local.default_tags

  lifecycle {
    ignore_changes = [template[0].container[0].image, template[0].container[1].image]
  }
}

