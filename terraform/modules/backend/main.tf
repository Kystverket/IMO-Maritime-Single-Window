resource "azurerm_container_app" "backend" {
  name                         = "ca-${var.app}-backend-${var.env}"
  container_app_environment_id = var.container_app_environment_id
  resource_group_name          = var.resource_group_name
  revision_mode                = "Single"

  identity {
    type         = "UserAssigned"
    identity_ids = [var.user_assigned_identity]
  }

  registry {
    server   = var.container_registry_server
    identity = var.user_assigned_identity
  }

  ingress {
    external_enabled           = false
    target_port                = 5000
    allow_insecure_connections = false
    traffic_weight {
      percentage = 100
      latest_revision = true
    }
  }

  secret {
    name                = "db-password"
    key_vault_secret_id = var.db_key_vault_secret_id
    identity            = var.user_assigned_identity
  }

  template {
    container {
      name   = "backend" 
      image  = "mcr.microsoft.com/azuredocs/containerapps-helloworld:latest"
      cpu    = 0.5
      memory = "1Gi"
      
      env {
        name  = "PGHOST"
        value = var.pghost
      }
      env {
        name  = "PGUSER"
        value = var.pguser
      }
      env {
        name  = "PGPORT"
        value = var.pgport
      }
      env {
        name  = "PGDATABASE"
        value = var.pgdatabase
      }
      env {
        name  = "PGPASSWORD"
        secret_name = var.pgpassword
      }
      env {
        name  = "PGSSLMODE"
        value = "require"
      }
    }
    max_replicas = 1
    min_replicas = 1
  }

  lifecycle {
    ignore_changes = [template[0].container[0].image]
  }
}