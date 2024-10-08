resource "azurerm_postgresql_flexible_server" "imo_app" {
  name                   = "psql-${var.app}-flex-server-${var.env}"
  resource_group_name    = var.resource_group_name
  location               = var.location
  version                = "13"
  administrator_login    = "postgres"
  administrator_password = var.db_password
  storage_mb             = 32768
  sku_name               = "B_Standard_B1ms"
  zone                   = 2
}

resource "azurerm_postgresql_flexible_server_database" "imo_app" {
  name      = "psqldb-${var.app}-flex-db-${var.env}"
  server_id = azurerm_postgresql_flexible_server.imo_app.id
  collation = "en_US.utf8"
  charset   = "utf8"
}

resource "azurerm_postgresql_flexible_server_firewall_rule" "imo_app" {
  name             = "afw-${var.app}-fw-rule-${var.env}"
  server_id        = azurerm_postgresql_flexible_server.imo_app.id
  start_ip_address = var.outbound_backend_ip
  end_ip_address   = var.outbound_backend_ip
}
