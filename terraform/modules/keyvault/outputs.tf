output "db_key_vault_secret_id" {
  value = azurerm_key_vault_secret.db_password.id
}

output "db_password" {
  value = azurerm_key_vault_secret.db_password.value
}