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

resource "azurerm_container_app_custom_domain" "frontend" {
  name             = trimprefix(azurerm_dns_txt_record.frontend.fqdn, "asuid.")
  container_app_id = var.frontend_container_app_id

  lifecycle {
    ignore_changes = [certificate_binding_type, container_app_environment_certificate_id]
  }
}

resource "time_sleep" "dns_propagation" {
  create_duration = "60s"

  depends_on = [azurerm_container_app_custom_domain.frontend]

  triggers = {
    url = azurerm_container_app_custom_domain.frontend.name,
  }
}

resource "azapi_resource" "managed_certificate" {
  type      = "Microsoft.App/ManagedEnvironments/managedCertificates@2024-03-01"
  name      = "cert-${var.app}-frontend-${var.env}"
  parent_id = var.container_app_environment_id
  location  = var.location

  body = jsonencode({
    properties = {
      subjectName             = time_sleep.dns_propagation.triggers["url"]
      domainControlValidation = "CNAME"
    }
  })

  response_export_values = ["*"]
}

resource "azapi_update_resource" "custom_domain_binding" {
  type        = "Microsoft.App/containerApps@2024-03-01"
  resource_id = var.frontend_container_app_id

  body = jsonencode({
    properties = {
      ingress = {
        customDomains = [
          {
            bindingType   = "SniEnabled",
            name          = time_sleep.dns_propagation.triggers["url"],
            certificateId = jsondecode(azapi_resource.managed_certificate.output).id
          }
        ]
      }
    }
  })
}
