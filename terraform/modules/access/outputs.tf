output "user_assigned_identity_frontend" {
  value = azurerm_user_assigned_identity.frontend.id
}

output "user_assigned_identity_backend" {
  value = azurerm_user_assigned_identity.backend.id
}

output "keyvault_role_assignment" {
  value = azurerm_role_assignment.admin_key_vault
}