variable "dns_zone_name" {
  type = string
}

variable "dns_resource_group_name" {
  type = string
}

variable "resource_group_name" {
  type = string
}

variable "location" {
  type = string
}

variable "app" {
  type = string
}

variable "env" {
  type = string
}

variable "container_app_environment_id" {
  type = string
}
variable "container_app_environment_name" {
  type = string
}

variable "frontend_container_app_id" {
  type = string
}

variable "frontend_container_app_name" {
  type = string
}

variable "frontend_dns_prefix" {
  type = string
}

variable "frontend_fqdn" {
  type = string
}

variable "frontend_custom_domain_verification_id" {
  type = string
}