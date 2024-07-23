# Maritime Single Window (MSW)
Generic MSW will perform different basic tasks within the realm of ship reporting and information exchange. The MSW is not customized to any particular country, application or process, but will provide basic services to support clearence processes within any country that seeks to meet the international obligations.

## Getting Started
These instructions will get you a copy of the project (client and server) up and running on your local machine for development and testing purposes. The project is compatible with Windows and Ubuntu. Please follow the specific guide for your operating system.

### Azure Infrastructure Setup

For setting up the Azure infrastructure and deploying the app, terraform files and Github Actions YAML files are provided in the repository. Instructions for using these files can be found in our [Wiki](https://github.com/Kystverket/IMO-Maritime-Single-Window/wiki/Terraform-Azure-%E2%80%90-Infrastructure-&-App-Deploymnent). 

## Contact
jarle.hauge@kystverket.no

## Prerequisites

Before you start, ensure Docker is installed on your machine: 

- For Ubuntu: [Docker Engine on Ubuntu](https://docs.docker.com/engine/install/ubuntu/)
- For Windows: [Docker Desktop](https://www.docker.com/products/docker-desktop/)


## Clone Repository

Clone the MSW repository to your local machine: 
```
git clone https://github.com/Kystverket/IMO-Maritime-Single-Window.git
```

## Dependencies

- Docker version 26.1.4
- WSL version: 2.2.4.0 (Windows only)

## Installation

### Ubuntu

1. **Verify Docker Installation**: Confirm that Docker is installed correctly using the CLI:

```
docker -v  
```

or 

```
sudo docker -v
```

2. **Navigate to Project Directory**: Change directory to where the `docker-compose.yaml`is located (under /IMO-Maritime-Single-Window):

```
IMO-Maritime-Single-Window/
├── BuildFrontend.bat
├── CONTRIBUTING.md
├── IMOMaritimeSingleWindow
│   ├── Client
│   ├── Database
│   ├── README.md
│   ├── Server
│   ├── docker-compose.yaml
│   └── package-lock.json
```

```
cd IMOMaritimeSingleWindow
```

### Windows

1. **Verify Docker and WSL installation**: Use the CLI to ensure both Docker and WSL are installed:

```
wsl -v       # Check WSL version
docker -v    # Check Docker version
```

2. **Navigate to Project Directory**: Go to the folder containing `docker-compose.yaml`:

```
cd IMOMaritimeSingleWindow
```


## Build & Run the Docker Containers

- **For Ubuntu**:

```
docker compose up
```

or 

```
sudo docker compose up
```

- **For Windows**

```
docker compose up
```

This command builds and starts all necessary services as defined in `docker-compose.yaml`, including the client interface, server application, and PostgreSQL database. This process may take some time during the initial setup, as it executes the [SQL script](https://github.com/Kystverket/IMO-Maritime-Single-Window/blob/master/IMOMaritimeSingleWindow/Server/SqlScripts/Create_and_populate_DB.sql) to populate the database. 


## Monitoring Client and Server Logs

To monitor and debug, open another CLI window and list all running containers:
```
docker ps
```

This displays each container's ID, which you need to view specific logs.

To check logs for individual services, use:

```
docker logs <CONTAINER ID>
```

For instance, to monitor the frontend service, look for logs from `imomaritimesinglewindow-frontend.devcontainer-1`. The setup is complete when you see "Compiled successfully" in the logs. 


## Access the Application
Navigate to the following URL in a web browser to access the MSW interface:

`http://localhost:4200`


## Development of Frontend
The frontend development environment is set up to automatically reflect changes you make in real time. As you edit and save your code in the `Client/src/app`, the Docker Compose service named `frontend.devcontainer` is configured to update automatically. This feature ensures a seamless development experience by reloading changes live as long as the Docker Compose session is active.

### Enabling Live Reload
To enable the watch functionality, which monitors file changes and updates the service accordingly, please open a new terminal, navigate to the project directory, and execute the following command: `docker compose watch`

### Testing Live Reload
To verify that the watch feature is working, make a change to the login header in the [login.component.html file](https://github.com/Kystverket/IMO-Maritime-Single-Window/blob/master/IMOMaritimeSingleWindow/Client/src/app/auth/login/login.component.html). For instance, modify the text inside a heading tag and save the file. The updates should appear automatically in the frontend served at `http://localhost:4200`, reflecting the changes without needing to manually restart the service.

## Stopping and Removing Containers

When you need to remove all containers, use:
```
docker compose down
```

To remove all containers, networks, and volumes:

```
docker compose down --volumes
```


