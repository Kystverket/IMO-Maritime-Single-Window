# ./Server/Dockerfile
FROM mcr.microsoft.com/dotnet/core/sdk:2.2-bionic

WORKDIR /workspaces/backend


# Copy the source code
COPY . .
COPY appsettings.default.json appsettings.json

# Copy the SQL script 
COPY ./SqlScripts/Create_and_populate_DB.sql /workspaces/backend/SqlScripts/Create_and_populate_DB.sql

# Install PostgreSQL client
RUN apt-get update && apt-get install -y postgresql-client iputils-ping

# Expose the port
EXPOSE 5000

ENV AppSettings__Secret=SuperSeADasd1235t4asdcret
ENV ASPNETCORE_URLS=http://0.0.0.0:5000


ENV PGHOST=imo-dev-psqlflexibleserver-1.postgres.database.azure.com
ENV PGPORT=5432
ENV PGDATABASE=db-imo-msw-dev-1
ENV PGUSER=postgres
ENV PGPASSWORD=szechuan

# RUN psql -h $PGHOST -U $PGUSER -d $PGDATABASE -f /workspaces/backend/SqlScripts/Create_and_populate_DB.sql
CMD ["sh", "-c", "\
  dotnet ef database update --context open_ssnContext -v && \
  dotnet run --urls http://0.0.0.0:5000" ]