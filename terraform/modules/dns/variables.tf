variable "dns_zone_name" {
  type = string
}

variable "dns_zone_resource_group_name" {
  type = string
}

variable "resource_group_name" {
  type = string
}

variable "container_app_id" {
  type = string
}

variable "outbound_ip_addresses" {
  type = [string]
}

variable "custom_domain_verification_id" {
  type = string
}
