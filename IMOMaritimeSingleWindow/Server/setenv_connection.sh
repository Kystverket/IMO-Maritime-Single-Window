
APP_CONFIG_FILE="./appsettings.json"

# Update the JSON configuration file
echo '{
  "ConnectionStrings": {
    "OpenSSN": "User ID=postgres;Password='"$PGPASSWORD"';Host='"$PGHOST"';Port='"$PGPORT"';Database='"$PGDATABASE"';SSL Mode=Require;Trust Server Certificate=true;",
    "UserDatabase": ""
  },
  "AppSettings": {
    "Secret" : "'$APPSETTINGS_SECRET'"
  },
  "JwtIssuerOptions": {
    "Issuer": "placeholderIssuer",
    "Audience": "localhost"
  }
}' > $APP_CONFIG_FILE


APP_DEFAULT_CONFIG_FILE="./appsettings.default.json"

echo '{
  "ConnectionStrings": {
    "OpenSSN": "User ID=postgres;Password='"$PGPASSWORD"';Host='"$PGHOST"';Port='"$PGPORT"';Database='"$PGDATABASE"';SSL Mode=Require;Trust Server Certificate=true;",
    "UserDatabase": ""
  },
  "AppSettings": {
    "Secret" : "'$APPSETTINGS_SECRET'"
  },
  "JwtIssuerOptions": {
    "Issuer": "placeholderIssuer",
    "Audience": "localhost"
  }
}' > $APP_DEFAULT_CONFIG_FILE