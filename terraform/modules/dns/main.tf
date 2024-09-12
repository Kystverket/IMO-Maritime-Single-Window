terraform {
  required_providers {
    null = {
      source  = "hashicorp/null"
    }
  }
}

data "azurerm_dns_zone" "dns_zone" {
  name                = var.dns_zone_name
  resource_group_name = var.dns_resource_group_name
}
