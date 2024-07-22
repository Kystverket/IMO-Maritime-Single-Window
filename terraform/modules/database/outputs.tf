output "pghost" {
  value = azurerm_postgresql_flexible_server.imo_app.fqdn
}

output "pguser" {
  value = azurerm_postgresql_flexible_server.imo_app.administrator_login
}

output "pgport" {
  value = "5432"
}

output "pgdatabase" {
  value = azurerm_postgresql_flexible_server_database.imo_app.name
}