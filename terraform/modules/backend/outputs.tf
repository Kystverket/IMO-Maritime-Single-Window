output "backend_internal_URL" {
  description = "The internal URL or Endpoint of the backend container app"
  value       = azurerm_container_app.backend.ingress[0].fqdn
}

output "backend_container_app" {
  description = "The backend container app"
  value       = azurerm_container_app.backend
}
output "outbound_backend_ip" {
  description = "The IP adress of the backend container app"
  value       = azurerm_container_app.backend.outbound_ip_addresses
}    