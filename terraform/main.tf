resource "azurerm_resource_group" "main" {
  name     = "${var.app_name}app-rg"
  location = var.location
}

resource "azurerm_storage_account" "main" {
  name                     = "${var.app_name}appsa"
  resource_group_name      = azurerm_resource_group.main.name
  location                 = var.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
}

resource "azurerm_storage_container" "main" {
  name                  = "content"
  storage_account_name  = azurerm_storage_account.main.name
  container_access_type = "private"
}