output "user_assigned_identity_id" {
  value = azurerm_user_assigned_identity.imo_app.id
}

output "keyvault_role_assignment" {
  value = azurerm_role_assignment.admin_key_vault
}