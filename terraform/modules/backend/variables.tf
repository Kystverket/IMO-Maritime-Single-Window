variable "resource_group_name" {
  description = "Name of the resource group"
  type        = string
}

variable "container_app_environment_id" {
  description = "The id of the container app environment"
  type        = string
}

variable "container_registry_server" {
  description = "The container registry server login"
  type        = string
}

variable "user_assigned_identity_cr" {
  description = "The ID of the user managed identity for the container registry"
  type        = string
}

variable "user_assigned_identity_vault" {
  description = "The ID of the user managed identity for the key vault"
  type        = string
}

variable "db_key_vault_secret_id" {
  description = "The key vault secret ID for the database password"
  type        = string
}

variable "pghost" {
  description = "The postgresql host name"
  type        = string
}

variable "pguser" {
  description = "The postgresql user name"
  type        = string
}

variable "pgport" {
  description = "The port of the postgresql database"
  type        = string
}

variable "pgdatabase" {
  description = "The database name"
  type        = string
}

variable "env" {
  description = "The application environment"
  type        =  string
}

variable "app" {
  description = "The application name"
  type        = string
}

variable "appsettings_secret" {
  description = "The application secret"
  type        = string
}