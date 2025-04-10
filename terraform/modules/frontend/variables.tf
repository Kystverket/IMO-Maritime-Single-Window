variable "app" {
  description = "The application name"
  type        = string
}

variable "env" {
  description = "The application environment"
  type        = string
}

variable "container_app_environment_id" {
  description = "The container app environment ID"
  type        = string
}

variable "container_app_environment_name" {
  type = string
}

variable "container_app_environment_default_domain" {
  type = string
}

variable "resource_group_name" {
  description = "The name of the resource group"
  type        = string
}

variable "container_registry_server" {
  description = "The container registry server login"
  type        = string
}

variable "user_assigned_frontend" {
  description = "The ID of the user assigned identity for the frontend container app"
  type        = string
}

variable "backend_internal_URL" {
  description = "The endpoint url of the backend container app"
  type        = string
}

variable "location" {
  description = "Location of Resources"
  type        = string
}