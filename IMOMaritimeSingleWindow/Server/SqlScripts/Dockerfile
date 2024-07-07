# Dockerfile for database verification
FROM mcr.microsoft.com/dotnet/core/sdk:2.2-bionic

WORKDIR /workspaces/verify

RUN apt-get update && apt-get install -y postgresql-client


CMD ["sh", "-c", "psql -h $PGHOST -U $PGUSER -d $PGDATABASE -c 'SELECT * FROM country;'"]