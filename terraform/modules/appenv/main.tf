resource "azurerm_log_analytics_workspace" "imo_app" {
  name                = "log-${var.app}-ca-analytics-${var.env}"
  location            = var.location
  resource_group_name = var.resource_group_name
}
resource "azurerm_container_app_environment" "imo_app" {
  name                       = "cae-${var.app}-ca-env-${var.env}"
  location                   = var.location
  resource_group_name        = var.resource_group_name
  log_analytics_workspace_id = azurerm_log_analytics_workspace.imo_app.id
}

locals {
  alphabetical_env = replace(var.env, "-", "")
  alphabetical_app = replace(var.app, "-", "")
}

resource "azurerm_container_registry" "acr" {
  name                = "cr${local.alphabetical_app}${local.alphabetical_env}"
  resource_group_name = var.resource_group_name
  sku                 = "Basic"
  location            = var.location
}