# Maritime Single Window (MSW)
Generic MSW will perform different basic tasks within the realm of ship reporting and information exchange. The MSW is not customized to any particular country, application or process, but will provide basic services to support clearence processes within any country that seeks to meet the international obligations.

## Getting Started
These instructions will get you a copy of the project (client and server) up and running on your local Windows machine for development and testing purposes. 

## Contact
jarle.hauge@kystverket.no

## Prerequisites
Ensure Docker Engine is installed on your machine. If not, follow the installation guide here:
* [Docker Engine on Ubuntu](https://docs.docker.com/engine/install/)
or
* [Docker Desktop](https://www.docker.com/products/docker-desktop/)

Use the command line interface (CLI) to verify the installations above
```
wsl -v
docker -v 
```

Clone the repository to your local machine: 
git clone https://github.com/Kystverket/IMO-Maritime-Single-Window.git

## Dependencies
- Docker version 26.1.4
- WSL version: 2.2.4.0



## Installation
Navigate to the project directory /IMOMaritimeSingleWindow and use Docker to build and run the containers.

### Build & Run the Docker Containers
Use the command line interface (CLI) to build and run the containers.

```
docker compose up
```

This will start all the required services in containers, including the front-end client, back-end server, and the PostgreSQL database. 

### Database setup
The PostgreSQL service is configured through Docker. The database will be automatically set up and populated with the initial data when the containers are first launched. 

## Client and Server Logs
The running containers are shown by the command:
```
docker ps
```
Here the CONTAINER ID will show up. 

View logs for debugging and monitoring:

```
docker logs <CONTAINER ID>
```

## Open a new browser session and navigate to
`http://localhost:4200`


## Stopping and Removing Containers
To stop the running containers:
```
docker compose down
```


To remove all containers, networks, and volumes:

```
docker compose down --volumes
```

Note; 
