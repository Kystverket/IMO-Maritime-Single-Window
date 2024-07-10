#!/bin/bash

# Export
# export PGHOST="imo-dev-psqlflexibleserver-1.postgres.database.azure.com"
# export PGUSER="postgres"
# export PGDATABASE="db-imo-msw-dev-1"
# export PGPORT=5432

# echo "Eduard Begin"
# Count the tables in the 'public' schema
BACKEND_LOG="./backend.log.json"

TABLE_COUNT=$(psql -h $PGHOST -U $PGUSER -d $PGDATABASE -p $PGPORT -t -c "SELECT COUNT(*) FROM information_schema.tables WHERE table_schema = 'public';" 2>&1)
# echo "$TABLE_COUNT"
# echo "Finished"
# Check if there are any tables
if [ "$TABLE_COUNT" -ne 0 ]; then
    echo '{
        "/message": "Database is already populated. Exiting script."
    } ' > $BACKEND_LOG
    
else
    # If no tables, run your SQL script
    echo '{
        "/message": "Running script to populate database."
    } ' > $BACKEND_LOG
    psql -h $PGHOST -U $PGUSER -d $PGDATABASE -p $PGPORT -f /workspaces/backend/SqlScripts/Create_and_populate_DB.sql
fi
