locals {
  stack = "${var.app}-${var.env}-${var.location}"

  default_tags = {
    environment = var.env
    app         = var.app
  }

}

resource "azurerm_resource_group" "imo_dev_app" {
  name     = "rg-${local.stack}"
  location = var.location

  tags     = local.default_tags
}

resource "azurerm_storage_account" "imo_dev_app" {
  name                     = "imodev"
  resource_group_name      = azurerm_resource_group.imo_dev_app.name
  location                 = var.location
  account_tier             = "Standard"
  account_replication_type = "LRS"

  tags = local.default_tags
}

resource "azurerm_storage_container" "imo_dev_app" {
  name                  = "tfstates"
  storage_account_name  = azurerm_storage_account.imo_dev_app.name
  container_access_type = "private"
}

resource "azurerm_log_analytics_workspace" "imo_dev_app" {
  name                = "log-${local.stack}"
  location            = azurerm_resource_group.imo_dev_app.location
  resource_group_name = azurerm_resource_group.imo_dev_app.name

  tags = local.default_tags
}
