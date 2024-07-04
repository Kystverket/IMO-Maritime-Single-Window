data "azurerm_client_config" "current" {}

resource "azurerm_key_vault" "imo_dev_app" {
  name                        = "imo-dev-keyvault"
  location                    = var.location
  resource_group_name         = data.azurerm_resource_group.imo_dev_app.name
  enabled_for_disk_encryption = true
  tenant_id                   = data.azurerm_client_config.current.tenant_id
  soft_delete_retention_days  = 7
  purge_protection_enabled    = false

  sku_name = "standard"

  access_policy {
    tenant_id = data.azurerm_client_config.current.tenant_id
    object_id = data.azurerm_client_config.current.object_id

    key_permissions = [
      "Get",
    ]

    secret_permissions = [
      "Get",
    ]

    storage_permissions = [
      "Get",
    ]
  }
}

resource "azurerm_key_vault_secret" "db_password" {
  name         = "secret-sauce"
  value        = "szechuan"
  key_vault_id = azurerm_key_vault.imo_dev_app.id
}

resource "azurerm_postgresql_flexible_server" "imo_dev" {
  name                   = "imo-dev-psqlflexibleserver"
  resource_group_name    = data.azurerm_resource_group.imo_dev_app.name
  location               = var.location
  version                = "13"
  administrator_login    = "psqladmin"
  administrator_password = azurerm_key_vault_secret.db_password.value
  storage_mb             = 32768
  sku_name               = "GP_Standard_D4s_v3"
}

resource "azurerm_postgresql_flexible_server_database" "imo_dev" {
  name      = "db-imo-msw-dev"
  server_id = azurerm_postgresql_flexible_server.imo_dev.id
  collation = "en_US.utf8"
  charset   = "utf8"

  # prevent the possibility of accidental data loss
  lifecycle {
    prevent_destroy = true
  }
}