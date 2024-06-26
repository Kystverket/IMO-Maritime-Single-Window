FROM mcr.microsoft.com/dotnet/core/sdk:2.2

WORKDIR /workspaces/backend

COPY . /workspaces/backend

RUN cp appsettings.default.json appsettings.json

CMD dotnet ef database update --context open_ssnContext -v && \
    dotnet run --urls http://0.0.0.0:5000