# Maritime Single Window (MSW)
Generic MSW will perform different basic tasks within the realm of ship reporting and information exchange. The MSW is not customized to any particular country, application or process, but will provide basic services to support clearence processes within any country that seeks to meet the international obligations.

## Getting Started
These instructions will get you a copy of the project (client and server) up and running on your local Windows machine for development and testing purposes. 

## Contact
jarle.hauge@kystverket.no

## Prerequisites
Ensure Docker Engine is installed on your machine for running containers:
- For Ubuntu: [Docker Engine on Ubuntu](https://docs.docker.com/engine/install/ubuntu/)
- For Windows/Mac: [Docker Desktop](https://www.docker.com/products/docker-desktop/)

After installation, verify Docker and WSL (if on Windows) are correctly installed using the command line interface (CLI):
```
wsl -v # Check WSL version, Windows only
docker -v # Check Docker version
```

Clone the MSW repository to your local machine: 
```
git clone https://github.com/Kystverket/IMO-Maritime-Single-Window.git
```

## Dependencies
- Docker version 26.1.4
- WSL version: 2.2.4.0

## Installation
Use the command line interface (CLI) to navigate to the project directory where the `docker-compose.yaml` file is located and prepare to launch the Docker containers. The `docker-compose.yaml` file is located in the `IMOMaritimeSingleWindow` folder.

### Build & Run the Docker Containers
Initialize the Docker environment by building and running the containers with the following command:
```
docker compose up
```
This command constructs and starts all necessary services as defined in `docker-compose.yaml`, including the client interface, server application, and PostgreSQL database. Initial setup will execute the [SQL script](https://github.com/Kystverket/IMO-Maritime-Single-Window/blob/master/IMOMaritimeSingleWindow/Server/SqlScripts/Create_and_populate_DB.sql) to populate the database, which may take some time.


### Database setup
The PostgreSQL service is configured through Docker. The database will be automatically set up and populated with the initial data when the containers are first launched. 

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
You have two options to enable the watch functionality, which monitors file changes and updates the service accordingly:

1. **Enable Watch in the Current Terminal**: Simply press `w` in the terminal where your Docker Compose is running. This toggles the watch feature on and off.

2. **Use a New Terminal Session**: If you prefer to keep your Docker Compose log output separate, open a new terminal, navigate to the project directory, and execute the following command:

```
docker compose watch
```


### Testing Live Reload
To verify that the watch feature is working, make a change to the login header in the [login.component.html file](https://github.com/Kystverket/IMO-Maritime-Single-Window/blob/dockerize-applicationv2/IMOMaritimeSingleWindow/Client/src/app/auth/login/login.component.html). For instance, modify the text inside a heading tag and save the file. The updates should appear automatically in the frontend served at `http://localhost:4200`, reflecting the changes without needing to manually restart the service.


## Stopping and Removing Containers
When you need to remove all containers, use:
```
docker compose down
```

To remove all containers, networks, and volumes:

```
docker compose down --volumes
```



