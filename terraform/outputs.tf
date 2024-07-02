output "azurerm_container_app_url" {
  value = azurerm_container_app.imo_dev_app.latest_revision_fqdn
}