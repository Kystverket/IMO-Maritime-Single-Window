
APP_CONFIG_FILE="./appsettings.json"

# Update the JSON configuration file
echo '{
  "ConnectionStrings": {
    "OpenSSN": "User ID=postgres;Password='"$PGPASSWORD"';Host=imo-dev-psqlflexibleserver-1.postgres.database.azure.com;Port=5432;Database=db-imo-msw-dev-1;SSL Mode=Require;Trust Server Certificate=true;",
    "UserDatabase": ""
  },
  "AppSettings": {
    "Secret" : "SuperSeADasd1235t4asdcret"
  },
  "JwtIssuerOptions": {
    "Issuer": "placeholderIssuer",
    "Audience": "localhost"
  }
}' > $APP_CONFIG_FILE


APP_DEFAULT_CONFIG_FILE="./appsettings.default.json"

echo '{
  "ConnectionStrings": {
    "OpenSSN": "User ID=postgres;Password='"$PGPASSWORD"';Host=imo-dev-psqlflexibleserver-1.postgres.database.azure.com;Port=5432;Database=db-imo-msw-dev-1;SSL Mode=Require;Trust Server Certificate=true;",
    "UserDatabase": ""
  },
  "AppSettings": {
    "Secret" : "SuperSeADasd1235t4asdcret"
  },
  "JwtIssuerOptions": {
    "Issuer": "placeholderIssuer",
    "Audience": "localhost"
  }
}' > $APP_DEFAULT_CONFIG_FILE