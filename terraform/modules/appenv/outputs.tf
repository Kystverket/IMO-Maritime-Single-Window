output "container_app_environment_id" {
  description = "The id of the container app environment"
  value       = azurerm_container_app_environment.imo_app.id
}

output "container_app_environment_name" {
  value = azurerm_container_app_environment.imo_app.name
}

output "container_app_environment_default_domain" {
  value = azurerm_container_app_environment.imo_app.default_domain
}

output "container_registry_server" {
  description = "The login to the container registry"
  value       = azurerm_container_registry.acr.login_server
}

output "container_registry_id" {
  description = "The ID of the container registry"
  value       = azurerm_container_registry.acr.id
}
