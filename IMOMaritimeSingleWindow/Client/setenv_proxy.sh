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

# Now you can add any other startup commands you need
