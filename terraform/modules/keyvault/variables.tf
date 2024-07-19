variable "location" {
  description = "The location of the key vault"
  type        = string
}

variable "resource_group_name" {
  description = "The name of the resource group"
  type        = string
}

variable "azure_current_tenant_id" {
  description = "The tenant ID of the current azure config"
  type        = string
}

variable "keyvault_role_assignment" {
  description = "The role assignment for the key vault"
}

variable "env" {
  description = "The application environment"
  type        = string
}

variable "app" {
  description = "The application name"
  type        = string
}