locals {
  stack = "${var.app}-${var.env}"

  default_tags = {
    environment = var.env
    app         = var.app
  }

}

resource "azurerm_log_analytics_workspace" "imo_dev_app" {
  name                = "log-${local.stack}"
  location            = var.location
  resource_group_name = azurerm_resource_group.imo_dev_app.name
  tags = local.default_tags
}

resource "azurerm_container_app_environment" "imo_dev_app" {
  name                       = "cae-${local.stack}"
  location                   = var.location
  resource_group_name        = azurerm_resource_group.imo_dev_app.name
  log_analytics_workspace_id = azurerm_log_analytics_workspace.imo_dev_app.id

  tags = local.default_tags
}

resource "azurerm_container_registry" "acr" {
  name                = "crimomsw"
  resource_group_name = azurerm_resource_group.imo_dev_app.name
  sku                 = "Basic"
  location            = var.location
}