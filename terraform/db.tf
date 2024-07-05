data "azurerm_client_config" "current" {}

resource "azurerm_key_vault" "imo_dev_app" {
  name                        = "imo-dev-keyvault"
  location                    = var.location
  resource_group_name         = data.azurerm_resource_group.imo_dev_app.name
  enabled_for_disk_encryption = true
  tenant_id                   = data.azurerm_client_config.current.tenant_id
  soft_delete_retention_days  = 7
  purge_protection_enabled    = true

  sku_name = "standard"

  access_policy {
    tenant_id = data.azurerm_client_config.current.tenant_id
    object_id = data.azurerm_client_config.current.object_id

    key_permissions = [
      "Get",
    ]

    secret_permissions = [
      "Get", "Set"
    ]

    storage_permissions = [
      "Get",
    ]
  }
}

resource "azurerm_key_vault_secret" "db_password" {
  name         = "secret-sauce"
  value        = "szechuan"
  key_vault_id = azurerm_key_vault.imo_dev_app.id
}

resource "azurerm_postgresql_flexible_server" "imo_dev" {
  name                   = "imo-dev-psqlflexibleserver"
  resource_group_name    = data.azurerm_resource_group.imo_dev_app.name
  location               = var.location
  version                = "13"
  administrator_login    = "psqladmin"
  administrator_password = azurerm_key_vault_secret.db_password.value
  storage_mb             = 32768
  sku_name               = "B_Standard_B1ms"

  lifecycle {
    ignore_changes = [
      zone,
      high_availability[0].standby_availability_zone,
    ]
  }
}

resource "azurerm_postgresql_flexible_server_database" "imo_dev" {
  name      = "db-imo-msw-dev"
  server_id = azurerm_postgresql_flexible_server.imo_dev.id
  collation = "en_US.utf8"
  charset   = "utf8"

  # prevent the possibility of accidental data loss
  lifecycle {
    prevent_destroy = true
  }
}

data "http" "my_ip" {
  url = "https://ifconfig.me/ip"
}

resource "azurerm_postgresql_flexible_server_firewall_rule" "allow_my_ip" {
  name                = "allow-my-ip"
  start_ip_address    = chomp(data.http.my_ip.body)
  end_ip_address      = chomp(data.http.my_ip.body)
  server_id           = azurerm_postgresql_flexible_server.imo_dev.id 
}

# resource "terraform_data" "execute_sql_script" {
#   depends_on = [azurerm_postgresql_flexible_server_database.imo_dev]

#   provisioner "local-exec" {
#     environment = {
#       PGHOST     = azurerm_postgresql_flexible_server.imo_dev.fqdn
#       PGUSER     = azurerm_postgresql_flexible_server.imo_dev.administrator_login
#       PGPORT     = "5432"
#       PGDATABASE = azurerm_postgresql_flexible_server_database.imo_dev.name
#       PGPASSWORD = azurerm_key_vault_secret.db_password.value
#     }

#     command = "psql --file=../Server/SqlScripts/Create_and_populate_DB.sql"
#   }
# }

# output "sql_execution_result" {
#   value = terraform_data.execute_sql_script.id
# }