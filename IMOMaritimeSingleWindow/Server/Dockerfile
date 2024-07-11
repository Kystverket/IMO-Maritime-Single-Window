# ./Server/Dockerfile
FROM mcr.microsoft.com/dotnet/core/sdk:2.2-bionic

WORKDIR /workspaces/backend

# Copy the source code
COPY . .
COPY appsettings.default.json appsettings.json

# Install PostgreSQL client
RUN apt-get update && apt-get install -y postgresql-client iputils-ping

# Expose the port
EXPOSE 5000

# Make the script executable
RUN chmod +x /workspaces/backend/setenv_connection.sh

CMD ["sh", "-c", "\
  ./setenv_connection &&\
  chmod +x ./populate_db.sh &&\
  ./populate_db.sh && \
  dotnet ef database update --context open_ssnContext -v && \
  dotnet run --urls http://0.0.0.0:5000" ]