variable "app" {
  description = "The application name"
  type        = string
  default     = "imo-msw"
}

variable "alphabetical_app" {
  description = "The application name with only alphanumeric characters"
  type        = string
  default     = "imomsw"
}

variable "location" {
  description = "Location of Resources"
  type        = string
  default     = "norwayeast"
}
