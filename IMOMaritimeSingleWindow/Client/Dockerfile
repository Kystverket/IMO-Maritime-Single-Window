# ./Client/Dockerfile
FROM node:10.24-slim

WORKDIR /workspaces/frontend

# Copy the source code
COPY . .

# Install dependencies
RUN npm install

# Expose the port
EXPOSE 4200

# Update package list and install iputils-ping for the ping command
RUN apt-get update && apt-get install -y iputils-ping

# Copy the bash script for setting the BACKEND_URL
COPY setenv_proxy.sh /workspaces/frontend/setenv_proxy.sh

# Make the script executable
RUN chmod +x /workspaces/frontend/setenv_proxy.sh

# Set the entrypoint command
CMD ["sh", "-c", "./setenv_proxy.sh && npm start"]
