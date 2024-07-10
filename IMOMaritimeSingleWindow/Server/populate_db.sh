#!/bin/bash

# Count the tables in the 'public' schema
TABLE_COUNT=$(psql -h $PGHOST -U $PGUSER -d $PGDATABASE -p $PGPORT -t -c "SELECT COUNT(*) FROM information_schema.tables WHERE table_schema = 'public';" 2>&1)

# Check if there are any tables
if [ "$TABLE_COUNT" -ne 0 ]; then
    echo "Database is already populated. Exiting script."
else
    # If no tables, run your SQL script
    psql -h $PGHOST -U $PGUSER -d $PGDATABASE -p $PGPORT -f /workspaces/backend/SqlScripts/Create_and_populate_DB.sql
fi
