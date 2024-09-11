// Specificly created for imo-msw preview environment
// Can be removed or altered for other applications

data "azurerm_dns_zone" "dns_zone" {
  count               = var.app == "imo-msw" && var.env == "dev-preview"
  name                = "imo-msw-dev.kystverket.cloud"
  resource_group_name = "rg-dns"
}

resource "azurerm_dns_a_record" "frontend" {
  count               = var.app == "imo-msw" && var.env == "dev-preview"
  name                = "@"
  zone_name           = data.azurerm_dns_zone.dns_zone.name
  resource_group_name = var.resource_group_name
  ttl                 = 3600
  records             = azurerm_container_app.frontend.outbound_ip_addresses
}

resource "azurerm_dns_txt_record" "frontend" {
  count               = var.app == "imo-msw" && var.env == "dev-preview"
  name                = "asuid"
  zone_name           = data.azurerm_dns_zone.dns_zone.name
  resource_group_name = var.resource_group_name
  ttl                 = 3600

  record {
    value = azurerm_container_app.frontend.custom_domain_verification_id
  }
}

resource "azurerm_container_app_custom_domain" "frontend" {
  count            = var.app == "imo-msw" && var.env == "dev-preview"
  name             = trimprefix(azurerm_dns_txt_record.frontend.fqdn, "asuid.")
  container_app_id = azurerm_container_app.frontend.id

  lifecycle {
    ignore_changes = [certificate_binding_type, container_app_environment_certificate_id]
  }
}