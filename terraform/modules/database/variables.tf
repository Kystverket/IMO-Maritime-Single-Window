variable "location" {
  description = "The location of the flexible server"
  type        = string
}

variable "resource_group_name" {
  description = "The name of the resource group"
  type        = string
}

variable "db_password" {
  description = "The database password"
  type        = string
}

variable "env" {
  description = "The application environment"
  type        = string
}

variable "app" {
  description = "The name of the application"
  type        = string
}

variable "backend_app" {
  description = "The backend container app"
}

variable "outbound_backend_ip" {
  description = "The IP adress of the backend container app"
  type        = list(string)
}