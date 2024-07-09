terraform {
  required_providers {
    azurerm = {
      source = "hashicorp/azurerm"
      version = "~>3.110.0"
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
  features {
    key_vault {
      purge_soft_delete_on_destroy    = true
      recover_soft_deleted_key_vaults = true
    }
  }
}
