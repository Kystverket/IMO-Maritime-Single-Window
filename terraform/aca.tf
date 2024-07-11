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

data "azurerm_container_registry" "acr" {
  name                = "crimomsw"
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
      latest_revision = true
    }
  }

  template {
    container {
      name   = "frontend"
      image  = "${data.azurerm_container_registry.acr.login_server}/client:f25a8253956efafbe9fa0b98651660b36f1685fc"
      cpu    = 1.0
      memory = "2Gi"
      env {
        name  = "BACKEND_URL"
        value = "https://${azurerm_container_app.backend.latest_revision_fqdn}"
        #azurerm_container_app.backend.latest_revision_fqdn
        # azurerm_container_app.backend.ingress[0].fqdn
      }
    }
    max_replicas = 1
    min_replicas = 1
  }

  tags = local.default_tags
  lifecycle {
    # ignore_changes = [template[0].container[0].image]
  }
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
    allow_insecure_connections = true
    traffic_weight {
      percentage = 100
      latest_revision = true
    }
  }

  secret {
    name                = "pg-password-secret"
    key_vault_secret_id = azurerm_key_vault_secret.db_password.id
    identity            = azurerm_user_assigned_identity.imo_dev_app.id
    value               = ""
  }

  template {
    container {
      name   = "backend" 
      image  = "${data.azurerm_container_registry.acr.login_server}/server:f25a8253956efafbe9fa0b98651660b36f1685fc"
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
        value = "szechuan"
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

  # lifecycle {
  #   # ignore_changes = [template[0].container[0].image]
  # }
}
