variable "container_registry_id" {
  description = "The container registry ID"
  type        = string
}

variable "resource_group_name" {
  description = "The resource group name"
  type        = string
}

variable "location" {
  description = "The location of the resource"
  type        = string
}

variable "resource_group_id" {
  description = "The resource group ID"
  type        = string
}

variable "key_vault_id" {
  description = "The key vault ID"
  type        = string
}

variable "azure_current_object_id" {
  description = "The object ID of the current azure client configuration"
  type        = string
}

variable "env" {
  description = "The application environment"
  type        = string
}

variable "app" {
  description = "The application name"
  type        = string
}