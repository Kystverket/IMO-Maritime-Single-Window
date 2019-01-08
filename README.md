# IMO-Maritime-Single-Window

## Prerequisites
* [npm](https://www.npmjs.com/get-npm)
* [chocolatey](https://chocolatey.org/install)

After you have ensured npm and chocolatey is installed,

open a CMD window with administrator rights and run:

### Installation (Windows)
```
choco install nodejs
npm install -g @angular/cli
choco install dotnetcore-sdk
```

### Client setup
```
cd IMOMaritimeSingleWindow\Client
npm install
ng serve --host 0.0.0.0 --port 4201 --proxy-config proxy.config.json
```

### Server setup
```
cd ..\Server
dotnet build
dotnet watch run
```

#### Now open a browser and navigate to
`http://localhost:4201`
