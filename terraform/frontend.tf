resource "azurerm_container_app" "frontend" {
  name                         = "frontend-${local.stack}"
  container_app_environment_id = azurerm_container_app_environment.imo_dev_app.id
  resource_group_name          = azurerm_resource_group.imo_dev_app.name
  revision_mode                = "Single"

  identity {
    type         = "UserAssigned"
    identity_ids = [azurerm_user_assigned_identity.imo_dev_app.id]
  }

  registry {
    server   = azurerm_container_registry.acr.login_server
    identity = azurerm_user_assigned_identity.imo_dev_app.id
  }

  ingress {
    external_enabled           = true
    target_port                = 4200
    allow_insecure_connections = false
    traffic_weight {
      percentage = 100
      latest_revision = true
    }
  }

  template {
    container {
      name   = "frontend"
      image  = "mcr.microsoft.com/azuredocs/containerapps-helloworld:latest"
      cpu    = 1.0
      memory = "2Gi"
      env {
        name  = "BACKEND_URL"
        value = "https://${azurerm_container_app.backend.ingress[0].fqdn}"
      }
    }
    max_replicas = 1
    min_replicas = 1
  }

  tags = local.default_tags
  lifecycle {
     ignore_changes = [template[0].container[0].image]
  }

  depends_on = [ azurerm_container_app.backend ]
}


