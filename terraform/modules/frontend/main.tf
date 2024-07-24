resource "azurerm_container_app" "frontend" {
  name                         = "ca-${var.app}-frontend-${var.env}"
  container_app_environment_id = var.container_app_environment_id
  resource_group_name          = var.resource_group_name
  revision_mode                = "Single"

  identity {
    type         = "UserAssigned"
    identity_ids = [var.user_assigned_frontend]
  }

  registry {
    server   = var.container_registry_server
    identity = var.user_assigned_frontend
  }

  ingress {
    external_enabled           = true
    target_port                = 4200
    allow_insecure_connections = false
    traffic_weight {
      percentage      = 100
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
        value = "https://${var.backend_internal_URL}"
      }
      env {
        name = "FRONTEND_URL"
        value = var.frontend_internal_URL
      }
    }
    max_replicas = 1
    min_replicas = 1
  }

  lifecycle {
    ignore_changes = [template[0].container[0].image]
  }
}