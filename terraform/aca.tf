resource "azurerm_container_app_environment" "imo_dev_app" {
  name                       = "cae-${local.stack}"
  location                   = var.location
  resource_group_name        = data.azurerm_resource_group.imo_dev_app.name
  log_analytics_workspace_id = azurerm_log_analytics_workspace.imo_dev_app.id

  tags = local.default_tags
}

data "azurerm_container_registry" "acr" {
  name                = "crimomsw"
  resource_group_name = data.azurerm_resource_group.imo_dev_app.name
}

resource "azurerm_container_app" "backend" {
  name                         = "backend-${local.stack}"
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
    external_enabled           = true
    target_port                = 5000
    allow_insecure_connections = false
    traffic_weight {
      percentage = 100
      latest_revision = true
    }
  }

  secret {
    name                = "db-password"
    key_vault_secret_id = azurerm_key_vault_secret.db_password.id
    identity            = azurerm_user_assigned_identity.imo_dev_app.id
  }

  template {
    container {
      name   = "backend" 
      image  = "mcr.microsoft.com/azuredocs/containerapps-helloworld:latest"
      cpu    = 0.5
      memory = "1Gi"
      env {
        name  = "PGHOST"
        value = "imo-dev-psqlflexibleserver-1.postgres.database.azure.com"
      }
      env {
        name  = "PGUSER"
        value = "postgres"
      }
      env {
        name  = "PGPORT"
        value = "5432"
      }
      env {
        name  = "PGDATABASE"
        value = "db-imo-msw-dev-1"
      }
      env {
        name  = "PGPASSWORD"
        secret_name = "db-password"
      }
      env {
        name  = "PGSSLMODE"
        value = "require"
      }
    }
    max_replicas = 1
    min_replicas = 1
  }

  tags = local.default_tags

  lifecycle {
    ignore_changes = [template[0].container[0].image]
  }
}

resource "azurerm_container_app" "frontend" {
  name                         = "frontend-${local.stack}"
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
    external_enabled           = true
    target_port                = 4200
    allow_insecure_connections = false
    traffic_weight {
      percentage = 100
      #latest_revision = true
      revision_suffix = "demo"
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
}


