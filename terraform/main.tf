# resource "azurerm_resource_group" "main" {
#   name     = "imo-sw-infra-rg"
#   location = var.location
# }

# resource "azurerm_storage_account" "main" {
#   name                     = "imoswinfra"
#   resource_group_name      = azurerm_resource_group.main.name
#   location                 = var.location
#   account_tier             = "Standard"
#   account_replication_type = "LRS"
# }

# resource "azurerm_storage_container" "main" {
#   name                  = "tfstate"
#   storage_account_name  = azurerm_storage_account.main.name
#   container_access_type = "private"
# }