output "frontend_internal_URL" {
  description = "The internal URL or Endpoint of the frontend container app"
  value       = azurerm_container_app.frontend.ingress[0].fqdn
}