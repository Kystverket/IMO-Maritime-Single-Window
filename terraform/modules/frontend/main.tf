locals {
  create_dns              = var.app == "imo-msw" && var.env == "dev-preview" ? 1 : 0
  container_app_name      = "ca-${var.app}-frontend-${var.env}-rename-test"
  dns_zone_name           = "imo-msw-dev.kystverket.cloud"
  dns_prefix              = "preview"
  dns_resource_group_name = "rg-dns"
  public_hostname         = local.create_dns == 1 ? "${local.dns_prefix}.${local.dns_zone_name}" : "${local.container_app_name}.${var.container_app_environment_default_domain}"
}

resource "azurerm_container_app" "frontend" {
  name                         = local.container_app_name
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
        name  = "PUBLIC_HOSTNAME"
        value = local.public_hostname
      }
    }
    max_replicas = 1
    min_replicas = 1
  }

  lifecycle {
    ignore_changes = [template[0].container[0].image]
  }
}

// Conditionally created for imo-msw preview environment
// Can be removed or altered for other applications
module "dns" {
  count                                       = local.create_dns
  source                                      = "../dns"
  dns_zone_name                               = local.dns_zone_name
  dns_resource_group_name                     = local.dns_resource_group_name
  dns_prefix                                  = local.dns_prefix
  container_app_environment_name              = var.container_app_environment_name
  container_app_resource_group_name           = var.resource_group_name
  container_app_name                          = azurerm_container_app.frontend.name
  container_app_fqdn                          = azurerm_container_app.frontend.ingress[0].fqdn
  container_app_custom_domain_verification_id = azurerm_container_app.frontend.custom_domain_verification_id
}
