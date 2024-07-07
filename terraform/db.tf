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

    key_permissions = ["Get"]

    secret_permissions = ["Get", "Set"]

    storage_permissions = ["Get"]
  }
  access_policy {
    tenant_id = data.azurerm_client_config.current.tenant_id
    object_id = azurerm_user_assigned_identity.imo_dev_app.principal_id

    secret_permissions = ["Get"]
  }
}

resource "azurerm_key_vault_secret" "db_password" {
  name         = "secret-sauce"
  value        = "szechuan"
  key_vault_id = azurerm_key_vault.imo_dev_app.id
}

resource "azurerm_postgresql_flexible_server" "imo_dev_app" {
  name                   = "imo-dev-psqlflexibleserver-1"
  resource_group_name    = data.azurerm_resource_group.imo_dev_app.name
  location               = var.location
  version                = "13"
  administrator_login    = "postgres"
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

resource "azurerm_postgresql_flexible_server_database" "imo_dev_app" {
  name      = "db-imo-msw-dev-1"
  server_id = azurerm_postgresql_flexible_server.imo_dev_app.id
  collation = "en_US.utf8"
  charset   = "utf8"

  # prevent the possibility of accidental data loss
  # lifecycle {
  #   prevent_destroy = true
  # }
}

resource "azurerm_postgresql_flexible_server_firewall_rule" "imo_dev_app" {
  name             = "db-fw"
  server_id        = azurerm_postgresql_flexible_server.imo_dev_app.id
  start_ip_address = "0.0.0.0"
  end_ip_address   = "0.0.0.0"
}


resource "azurerm_container_group" "db_verifier" {
  name                = "db-verifier"
  location            = var.location
  resource_group_name = data.azurerm_resource_group.imo_dev_app.name
  os_type             = "Linux"
  ip_address_type     = "Public"

  # image_registry_credential {
  #   server   = "crimomsw.azurecr.io"
  #   username = "your_acr_service_principal_client_id"
  #   password = "your_acr_service_principal_client_secret"
  # } 
  container {
    name   = "db-verifier"
    image  = "${data.azurerm_container_registry.acr.login_server}/db-verifier:latest"
    cpu    = "0.25"
    memory = "0.5"
    ports {
      port     = 443
      protocol = "TCP"
    }
    environment_variables = {
      PGHOST     = "imo-dev-psqlflexibleserver-1.postgres.database.azure.com"
      PGUSER     = "postgres"
      PGPASSWORD = "szechuan"
      PGDATABASE = "db-imo-msw-dev-1"
    }

    commands = [
      "sh",
      "-c",
      "psql -h $PGHOST -U $PGUSER -d $PGDATABASE -c 'SELECT * FROM country;'"
    ]
  }
}
