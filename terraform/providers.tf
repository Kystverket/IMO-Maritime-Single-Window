provider "azurerm" {
  features {}
}

terraform {
  backend "azurerm" {
    resource_group_name  = "imo-sw-infra-rg"
    storage_account_name = "imoswinfra "
    container_name       = "tfstate"
    key                  = "state.tfstate"
  }
}

data "azurerm_client_config" "current" {}