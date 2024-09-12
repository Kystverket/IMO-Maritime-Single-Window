resource "azurerm_dns_cname_record" "frontend" {
  name                = var.frontend_dns_prefix
  zone_name           = data.azurerm_dns_zone.dns_zone.name
  resource_group_name = data.azurerm_dns_zone.dns_zone.resource_group_name
  ttl                 = 3600
  record              = var.frontend_fqdn
}

resource "azurerm_dns_txt_record" "frontend" {
  name                = "asuid.${azurerm_dns_cname_record.frontend.name}"
  zone_name           = data.azurerm_dns_zone.dns_zone.name
  resource_group_name = data.azurerm_dns_zone.dns_zone.resource_group_name
  ttl                 = 3600

  record {
    value = var.frontend_custom_domain_verification_id
  }
}

resource "terraform_data" "frontend_custom_domain" {
  input = {
    public_hostname                = "${azurerm_dns_cname_record.frontend.name}.${data.azurerm_dns_zone.dns_zone.name}"
    resource_group_name            = var.frontend_resource_group_name
    container_app_name             = var.frontend_container_app_name
    container_app_environment_name = var.frontend_container_app_environment_name
  }

  provisioner "local-exec" {
    command = "az containerapp hostname add --hostname ${self.input.public_hostname} -g ${self.input.resource_group_name} -n ${self.input.container_app_name}"
  }
  provisioner "local-exec" {
    command = "az containerapp hostname bind --hostname ${self.input.public_hostname} -g ${self.input.resource_group_name} -n ${self.input.container_app_name} --environment ${self.input.container_app_environment_name} --validation-method CNAME"
  }
  provisioner "local-exec" {
    when    = destroy
    command = "az containerapp hostname delete --hostname ${self.input.public_hostname} -g ${self.input.resource_group_name} -n ${self.input.container_app_name}"
  }
}
