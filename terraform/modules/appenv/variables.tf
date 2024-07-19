variable "location" {
  description = "Location of this environment"
  type        = string
}

variable "resource_group_name" {
  description = "Name of the resource group"
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