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

variable "env" {
  description = "The application environment"
  type        = string
  default     = "dev-preview"
}

variable "alphabetical_env" {
  description = "The application environment with only alphanumeric characters"
  type        = string
  default     = "devpreview"
}

variable "location" {
  description = "Location of Resources"
  type        = string
  default     = "norwayeast"
}
