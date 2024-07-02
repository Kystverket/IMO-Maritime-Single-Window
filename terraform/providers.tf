terraform {
  required_version = "1.9.0"
  required_providers {
    azurerm = {
      source = "hashicorp/azurerm"
      version = "~>3.110.0"
    }
    azapi = {
      source = "Azure/azapi"
      version = "~>1.13.1"
    }
  }
  backend "azurerm" {
    resource_group_name  = azurerm_resource_group.imo_dev_app.name
    storage_account_name = azurerm_storage_account.imo_dev_app.name
    container_name       = "tfstates"
    key                  = "state.tfstates"
  }
}

provider "azurerm" {
  features {}
}
