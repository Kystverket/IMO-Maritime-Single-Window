# IMO-Maritime-Single-Window

## Prerequisites
* [npm](https://www.npmjs.com/get-npm)
* [chocolatey](https://chocolatey.org/install)

Open a CMD window with administrator rights and run:

```
cd IMOMaritimeSingleWindow\Client
choco install nodejs // Yes, you will need to install chocolatey first
npm install -g @angular/cli
npm install
ng serve --host 0.0.0.0 --port 4201 --proxy-config proxy.config.json
```
