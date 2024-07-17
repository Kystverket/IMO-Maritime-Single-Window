locals {
  env                             = terraform.workspace
  alphabetical_env                = replace(terraform.workspace, "-", "")
}

terraform {
  required_providers {
    azurerm = {
      source = "hashicorp/azurerm"
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
  features {
    key_vault {
      purge_soft_delete_on_destroy    = true
      recover_soft_deleted_key_vaults = true
    }
  }
}

resource "azurerm_resource_group" "imo_app" {
  name      = "rg-${var.app}-${local.env}"
  location  = var.location
}

data "azurerm_client_config" "current" {}

module "access" {
  source                        = "./modules/access"
  env                           = local.env
  app                           = var.app
  resource_group_id             = azurerm_resource_group.imo_app.id
  resource_group_name           = azurerm_resource_group.imo_app.name
  location                      = var.location
  azure_current_object_id       = data.azurerm_client_config.current.object_id
  key_vault_id                  = module.keyvault.key_vault_id
  container_registry_id         = module.appenv.container_registry_id
}

module "keyvault" {
  source                        = "./modules/keyvault"
  env                           = local.env
  app                           = var.app
  resource_group_name           = azurerm_resource_group.imo_app.name
  location                      = var.location
  azure_current_tenant_id       = data.azurerm_client_config.current.tenant_id
  keyvault_role_assignment      = module.access.keyvault_role_assignment
}         

module "database" {
  source                        = "./modules/database"
  env                           = local.env
  app                           = var.app
  resource_group_name           = azurerm_resource_group.imo_app.name 
  location                      = var.location
  db_password                   = module.keyvault.db_password
  backend_app                   = module.backend.backend_container_app
  outbound_backend_ip           = module.backend.outbound_backend_ip
}      

module "appenv" {
  source                        = "./modules/appenv"
  env                           = local.env
  alphabetical_env              = local.alphabetical_env
  app                           = var.app
  alphabetical_app              = var.alphabetical_app
  resource_group_name           = azurerm_resource_group.imo_app.name
  location                      = var.location
}

module "backend"{
  source                        = "./modules/backend"
  env                           = local.env
  app                           = var.app
  pghost                        = module.database.pghost
  pgdatabase                    = module.database.pgdatabase
  pgport                        = module.database.pgport
  pguser                        = module.database.pguser
  resource_group_name           = azurerm_resource_group.imo_app.name
  container_registry_server     = module.appenv.container_registry_server
  container_app_environment_id  = module.appenv.container_app_environment_id
  user_assigned_identity_vault  = module.access.user_assigned_identity_vault
  user_assigned_identity_cr     = module.access.user_assigned_identity_cr
  db_key_vault_secret_id        = module.keyvault.db_key_vault_secret_id
  appsettings_secret            = module.keyvault.appsettings_secret
}

module "frontend" {
  source                        = "./modules/frontend"
  env                           = local.env
  app                           = var.app
  backend_container_app         = module.backend.backend_container_app
  resource_group_name           = azurerm_resource_group.imo_app.name
  user_assigned_identity_cr     = module.access.user_assigned_identity_cr
  container_app_environment_id  = module.appenv.container_app_environment_id
  container_registry_server     = module.appenv.container_registry_server
  backend_internal_URL          = module.backend.backend_internal_URL
}