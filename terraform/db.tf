
resource "azurerm_postgresql_flexible_server" "imo_dev_app" {
  name                   = "imo-dev-psqlflexibleserver-1"
  resource_group_name    = data.azurerm_resource_group.old.name
  location               = var.location
  version                = "13"
  administrator_login    = "postgres"
  administrator_password = azurerm_key_vault_secret.db_password.value
  storage_mb             = 32768
  sku_name               = "B_Standard_B1ms"

  lifecycle {
    ignore_changes = [
      zone,
      high_availability[0].standby_availability_zone,
    ]
  }
}

resource "azurerm_postgresql_flexible_server_database" "imo_dev_app" {
  name      = "db-imo-msw-dev-1"
  server_id = azurerm_postgresql_flexible_server.imo_dev_app.id
  collation = "en_US.utf8"
  charset   = "utf8"
}

resource "azurerm_postgresql_flexible_server_firewall_rule" "imo_dev_app" {
  name             = "db-fw"
  server_id        = azurerm_postgresql_flexible_server.imo_dev_app.id
  start_ip_address = "0.0.0.0"
  end_ip_address   = "0.0.0.0"
}
