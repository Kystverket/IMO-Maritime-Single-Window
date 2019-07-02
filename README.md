# Maritime Single Window (MSW)
Generic MSW will perform different basic tasks within the realm of ship reporting and information exchange. The MSW is not customized to any particular country, application or process, but will provide basic services to support clearence processes within any country that seeks to meet the international obligations.

## Getting Started
These instructions will get you a copy of the project (client and server) up and running on your local Windows machine for development and testing purposes. 

## Prerequisites
Make sure to clone the repository on your computer. 
Then download and install the following
* [npm](https://www.npmjs.com/get-npm)
* [chocolatey](https://chocolatey.org/install)


Use the command line interface (CLI) to verify the installations above

```
npm -version 
choco -v
```
### Installation (Windows)
Use the command line interface (CLI) with administrator rights and install the following:

```
choco install nodejs
npm install -g @angular/cli
choco install dotnetcore-sdk
```
### Database setup
Follow the guide below to install postgres on your machine.
* [PostgreSQL](https://www.postgresql.org/download/)

Once completed and you have a server up and running, [run the following script to create and populate your database](https://github.com/Fundator/IMO-Maritime-Single-Window/blob/master/IMOMaritimeSingleWindow/Server/SqlScripts/Create_and_populate_DB.sql)

After running the script, copy the file named "appsettings.default.json" in your Server folder, paste it into the same location and rename the copy to "appsettings.json".
Update the "appsettings.json" file with the correct connection string (Most likely localhost on first run), username and password.
Example of appsettings.json:
```
{
    "ConnectionStrings": {
      "OpenSSN": "User ID=postgres;Host=localhost;Port=5432;Database=imomsw;keepalive=60;",
      "UserDatabase": ""
  }
}
```


### Client setup
Use the command line interface (CLI). Navigate to the client directory on your computer and setup the client'

```
cd <yourpath>\IMOMaritimeSingleWindow\Client
npm install
ng serve --host 0.0.0.0 --port 4201 --proxy-config proxy.config.json
```
### Server setup
Use the command line interface (CLI). Navigate to the server directory on your computer and setup the server'

```
cd ..\Server
dotnet build
dotnet watch run
```
#### Open a new browser session and navigate to
`http://localhost:4201`

Note; you need to have a connection to the database
