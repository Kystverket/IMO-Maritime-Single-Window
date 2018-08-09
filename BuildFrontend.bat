rem call dotnet publish ./IMOMaritimeSingleWindow\Server\IMOMaritimeSingleWindow.csproj --runtime ubuntu-x64
rem call dotnet publish ./IMOMaritimeSingleWindow\Server\IMOMaritimeSingleWindow.csproj --runtime win10-x64
cd ./IMOMaritimeSingleWindow/Client
call npm install
call ng build --bundle-dependencies all --output-path ./../Server/wwwroot
rem move wwwroot ./../Server/wwwroot
cd ./../..
@pause