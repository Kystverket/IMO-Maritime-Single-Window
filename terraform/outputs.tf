output "azurerm_container_backend_url" {
  value = "http://${azurerm_container_app.backend.latest_revision_fqdn}:5000"
}