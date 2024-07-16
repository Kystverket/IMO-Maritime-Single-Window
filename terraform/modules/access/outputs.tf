output "user_assigned_identity_vault" {
  value = azurerm_user_assigned_identity.imo_app_vault.id
}

output "user_assigned_identity_cr" {
  value = azurerm_user_assigned_identity.imo_app_cr.id
}

output "keyvault_role_assignment" {
  value = azurerm_role_assignment.admin_key_vault
}