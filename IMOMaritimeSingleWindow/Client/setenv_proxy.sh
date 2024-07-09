#!/bin/bash
# setenv_proxy.sh - Script to set environment variables in a JSON config

# Path to the JSON config file
PROXY_CONFIG_FILE="./proxy.config.json"

# Write the JSON configuration
echo '{
  "/api": {
    "target": "'"$BACKEND_URL"'",
    "secure": true
  }
}' > $PROXY_CONFIG_FILE



# Path to the environment files
DEV_ENV_FILE="./src/environments/environment.ts"
PROD_ENV_FILE="./src/environments/environment.prod.ts"


# Backend URL

# Update the development environment file
echo "export const environment = {
  production: false,
  apiUrl: '$BACKEND_URL'
};" > $DEV_ENV_FILE


# Update the production environment file
echo "export const environment = {
  production: true,
  apiUrl: '$BACKEND_URL'
};" > $PROD_ENV_FILE