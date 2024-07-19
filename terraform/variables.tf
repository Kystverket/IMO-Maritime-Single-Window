variable "app" {
  description = "The application name"
  type        = string
  default     = "alex-2"
}

variable "alphabetical_app" {
  description = "The application name with only alphanumeric characters"
  type        = string
  default     = "alex2"
}

variable "location" {
  description = "Location of Resources"
  type        = string
  default     = "norwayeast"
}