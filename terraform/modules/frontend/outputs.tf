output "container_app_id" {
  value = azurerm_container_app.frontend.id
}

output "container_app_name" {
  value = azurerm_container_app.frontend.name
}

output "fqdn" {
  value = azurerm_container_app.frontend.ingress[0].fqdn
}

output "custom_domain_verification_id" {
  value = azurerm_container_app.frontend.custom_domain_verification_id
}
