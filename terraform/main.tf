locals {
  stack = "${var.app}-${var.env}"

  default_tags = {
    environment = var.env
    app         = var.app
  }

}

data "azurerm_resource_group" "imo_dev_app" {
  name = "rg-imo-msw-terraform-dev-preview"
}


resource "azurerm_log_analytics_workspace" "imo_dev_app" {
  name                = "log-${local.stack}"
  location            = var.location
  resource_group_name = data.azurerm_resource_group.imo_dev_app.name
  tags = local.default_tags
}
