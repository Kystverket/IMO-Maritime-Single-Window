resource "azurerm_dns_cname_record" "frontend" {
  name                = var.frontend_dns_prefix
  zone_name           = var.dns_zone_name
  resource_group_name = var.dns_resource_group_name
  ttl                 = 3600
  record              = var.frontend_fqdn
}

resource "azurerm_dns_txt_record" "frontend" {
  name                = "asuid.${azurerm_dns_cname_record.frontend.name}"
  zone_name           = var.dns_zone_name
  resource_group_name = var.dns_resource_group_name
  ttl                 = 3600

  record {
    value = var.frontend_custom_domain_verification_id
  }

  provisioner "local-exec" {
    command = "az containerapp hostname add --hostname ${var.frontend_public_hostname} -g ${var.resource_group_name} -n ${var.frontend_container_app_name}"
  }
  provisioner "local-exec" {
    command = "az containerapp hostname bind --hostname ${var.frontend_public_hostname} -g ${var.resource_group_name} -n ${var.frontend_container_app_name} --environment ${var.container_app_environment_name} --validation-method CNAME"
  }
}
