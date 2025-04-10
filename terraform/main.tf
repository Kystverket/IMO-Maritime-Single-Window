locals {
  env = terraform.workspace
}

terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~>3.110.0"
    }
  }
  backend "azurerm" {
    resource_group_name  = "rg-imo-msw-terraform-common"
    storage_account_name = "stimomswterraform"
    container_name       = "tfstates"
    key                  = "state.tfstates"
  }
}

provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "imo_app" {
  name     = "rg-${var.app}-${local.env}"
  location = var.location
}

data "azurerm_client_config" "current" {}

module "access" {
  source                  = "./modules/access"
  env                     = local.env
  app                     = var.app
  resource_group_id       = azurerm_resource_group.imo_app.id
  resource_group_name     = azurerm_resource_group.imo_app.name
  location                = var.location
  azure_current_object_id = data.azurerm_client_config.current.object_id
  key_vault_id            = module.keyvault.key_vault_id
  container_registry_id   = module.appenv.container_registry_id
}

module "keyvault" {
  source                   = "./modules/keyvault"
  env                      = local.env
  app                      = var.app
  resource_group_name      = azurerm_resource_group.imo_app.name
  location                 = var.location
  azure_current_tenant_id  = data.azurerm_client_config.current.tenant_id
  keyvault_role_assignment = module.access.keyvault_role_assignment
}

module "database" {
  source              = "./modules/database"
  env                 = local.env
  app                 = var.app
  resource_group_name = azurerm_resource_group.imo_app.name
  location            = var.location
  db_password         = module.keyvault.db_password
  outbound_backend_ip = module.backend.outbound_backend_ip
}

module "appenv" {
  source              = "./modules/appenv"
  env                 = local.env
  app                 = var.app
  resource_group_name = azurerm_resource_group.imo_app.name
  location            = var.location
}

module "backend" {
  source                                 = "./modules/backend"
  env                                    = local.env
  app                                    = var.app
  pghost                                 = module.database.pghost
  pgdatabase                             = module.database.pgdatabase
  pgport                                 = module.database.pgport
  pguser                                 = module.database.pguser
  resource_group_name                    = azurerm_resource_group.imo_app.name
  user_assigned_backend                  = module.access.user_assigned_identity_backend
  container_registry_server              = module.appenv.container_registry_server
  container_app_environment_id           = module.appenv.container_app_environment_id
  db_key_vault_secret_id                 = module.keyvault.db_key_vault_secret_id
  appsettings_secret                     = module.keyvault.appsettings_secret
  appsettings_secret_key_vault_secret_id = module.keyvault.appsettings_secret_key_vault_secret_id
}

module "frontend" {
  source                                   = "./modules/frontend"
  env                                      = local.env
  app                                      = var.app
  resource_group_name                      = azurerm_resource_group.imo_app.name
  location                                 = var.location
  container_app_environment_id             = module.appenv.container_app_environment_id
  container_app_environment_name           = module.appenv.container_app_environment_name
  container_app_environment_default_domain = module.appenv.container_app_environment_default_domain
  container_registry_server                = module.appenv.container_registry_server
  backend_internal_URL                     = module.backend.backend_internal_URL
  user_assigned_frontend                   = module.access.user_assigned_identity_frontend
}


import {
  id = "/subscriptions/${local.dns_subscription_id}/resourceGroups/${local.dns_resource_group_name}/providers/Microsoft.Network/dnsZones/${local.dns_zone_name}"
  to = module.frontend.module.dns[0].azurerm_dns_zone.child_dns_zone
}

import {
  id = "/subscriptions/${local.dns_subscription_id}/resourceGroups/${local.dns_resource_group_name}"
  to = module.frontend.module.dns[0].azurerm_resource_group.child_dns_rg
}

locals {
  dns_subscription_id = "57c2a465-814f-4561-a994-916500fb05b3"
  dns_resource_group_name = "rg-dns"
  dns_zone_name = "imo-msw-dev.kystverket.cloud"
}

