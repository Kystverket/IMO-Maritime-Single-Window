output "db_key_vault_secret_id" {
  value = azurerm_key_vault_secret.db_password.id
}

output "db_password" {
  value = azurerm_key_vault_secret.db_password.value
}

output "key_vault_id" {
  value = azurerm_key_vault.imo_app.id
}

output "appsettings_secret" {
  value = azurerm_key_vault_secret.appsettings_secret
}
