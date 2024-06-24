FROM mcr.microsoft.com/dotnet/core/sdk:2.2 AS build
WORKDIR /app

COPY *.csproj ./
COPY ./appsettings.default.json ./appsettings.json

RUN dotnet restore
COPY . ./
RUN dotnet publish -c Release -o out

FROM mcr.microsoft.com/dotnet/core/aspnet:2.2 AS runtime

WORKDIR /app
COPY --from=build /app/out ./

ENV ASPNETCORE_URLS http://0.0.0.0:5000

ENTRYPOINT ["dotnet", "IMOMaritimeSingleWindow.dll"]