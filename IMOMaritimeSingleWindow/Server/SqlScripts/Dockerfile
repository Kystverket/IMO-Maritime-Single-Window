# Dockerfile for database verification
FROM mcr.microsoft.com/dotnet/core/sdk:2.2-bionic

WORKDIR /workspaces/verify

# Install PostgreSQL client
RUN apt-get update && apt-get install -y postgresql-client

# Set the entrypoint command to run the verification query and output the result
CMD ["sh", "-c", "psql -h $PGHOST -U $PGUSER -d $PGDATABASE -c 'SELECT * FROM country;'"]

