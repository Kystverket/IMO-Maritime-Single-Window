# ./Server/Dockerfile
FROM mcr.microsoft.com/dotnet/core/sdk:2.2

WORKDIR /workspaces/backend

# Copy the source code
COPY . .
COPY appsettings.default.json appsettings.json

# Expose the port
EXPOSE 5000

# Set the entrypoint command
CMD ["sh", "-c", "dotnet ef database update --context open_ssnContext -v && dotnet run --urls http://backend.devcontainer:5000"]
