terraform {
  # required_version = "1.9.0"
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
    resource_group_name  = "rg-imo-msw-terraform-dev-preview"
    storage_account_name = "stimomswterraform"
    container_name       = "tfstates"
    key                  = "state.tfstates"
  }
}

provider "azurerm" {
  features {}
}
