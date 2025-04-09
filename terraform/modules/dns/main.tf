#data "azurerm_dns_zone" "dns_zone" {
#  name                = var.dns_zone_name
#  resource_group_name = var.dns_resource_group_name
#}

resource "azurerm_dns_cname_record" "cname_record" {
  name                = var.dns_prefix
  zone_name           = azurerm_dns_zone.child_dns_zone.name
  resource_group_name = azurerm_dns_zone.child_dns_zone.resource_group_name
  ttl                 = 3600
  record              = var.container_app_fqdn
}

resource "azurerm_dns_txt_record" "txt_record" {
  name                = "asuid.${azurerm_dns_cname_record.cname_record.name}"
  zone_name           = azurerm_dns_zone.child_dns_zone.name
  resource_group_name = azurerm_dns_zone.child_dns_zone.resource_group_name
  ttl                 = 3600

  record {
    value = var.container_app_custom_domain_verification_id
  }
}

resource "terraform_data" "custom_domain" {
  triggers_replace = [
    var.container_app_fqdn,
    var.container_app_custom_domain_verification_id
  ]

  input = {
    public_hostname                = "${azurerm_dns_cname_record.cname_record.name}.${data.azurerm_dns_zone.dns_zone.name}"
    resource_group_name            = var.container_app_resource_group_name
    container_app_name             = var.container_app_name
    container_app_environment_name = var.container_app_environment_name
  }

  provisioner "local-exec" {
    command    = "az containerapp hostname add --hostname ${self.input.public_hostname} -g ${self.input.resource_group_name} -n ${self.input.container_app_name}"
    on_failure = continue
  }
  provisioner "local-exec" {
    command    = "az containerapp hostname bind --hostname ${self.input.public_hostname} -g ${self.input.resource_group_name} -n ${self.input.container_app_name} --environment ${self.input.container_app_environment_name} --validation-method CNAME"
    on_failure = continue
  }
  provisioner "local-exec" {
    when       = destroy
    command    = "az containerapp hostname delete --hostname ${self.input.public_hostname} -g ${self.input.resource_group_name} -n ${self.input.container_app_name} --yes"
    on_failure = continue
  }
}


# Resource Group for the Child DNS Zone (in child subscription)
resource "azurerm_resource_group" "child_dns_rg" {
  name     = var.dns_resource_group_name
  location = var.dns_location
}

# Child DNS Zone (az-child.kystverket.cloud) in the child subscription
resource "azurerm_dns_zone" "child_dns_zone" {
  name                = var.dns_zone_name
  resource_group_name = azurerm_resource_group.child_dns_rg.name
}

import {
  id = "/subscriptions/${local.dns_subscription_id}/resourceGroups/${var.dns_resource_group_name}/providers/Microsoft.Network/dnsZones/${var.dns_zone_name}"
  to = azurerm_dns_zone.child_dns_zone
}

import {
  id = "/subscriptions/${local.dns_subscription_id}/resourceGroups/${var.dns_resource_group_name}"
  to = azurerm_resource_group.child_dns_rg
}

locals {
  dns_subscription_id = "57c2a465-814f-4561-a994-916500fb05b3"
}

