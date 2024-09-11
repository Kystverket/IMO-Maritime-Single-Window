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
}

resource "azurerm_container_app_custom_domain" "frontend" {
  name             = trimprefix(azurerm_dns_txt_record.frontend.fqdn, "asuid.")
  container_app_id = var.container_app_id

  lifecycle {
    ignore_changes = [certificate_binding_type, container_app_environment_certificate_id]
  }
}