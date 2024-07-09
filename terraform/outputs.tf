output "azurerm_container_backend_url" {
  value = azurerm_container_app.backend.latest_revision_fqdn
}