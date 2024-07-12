variable "app" {
  type        = string
  description = "Name of the app"
  default     = "imomsw"
}

variable "location" {
  type        = string
  description = "Location of Resources"
  default     = "norwayeast"
}

variable "env" {
  type        = string
  description = "Application env"
  default     = "dev-preview"
}

variable "rg_name" {
  type        = string
  description = "Name of the resource group"
  default     = "rg-imo-msw-dev-preview"
}
