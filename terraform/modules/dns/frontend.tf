resource "azurerm_dns_a_record" "frontend" {
  name                = "@"
  zone_name           = data.azurerm_dns_zone.dns_zone.name
  resource_group_name = var.resource_group_name
  ttl                 = 3600
  records             = var.outbound_ip_addresses
}

resource "azurerm_dns_txt_record" "frontend" {
  name                = "asuid"
  zone_name           = data.azurerm_dns_zone.dns_zone.name
  resource_group_name = var.resource_group_name
  ttl                 = 3600

  record {
    value = var.custom_domain_verification_id
  }
}

resource "azurerm_container_app_custom_domain" "frontend" {
  name             = trimprefix(azurerm_dns_txt_record.frontend.fqdn, "asuid.")
  container_app_id = var.container_app_id

  lifecycle {
    ignore_changes = [certificate_binding_type, container_app_environment_certificate_id]
  }
}