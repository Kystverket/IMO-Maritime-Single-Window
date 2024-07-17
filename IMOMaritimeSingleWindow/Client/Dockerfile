# ./Client/Dockerfile
FROM node:10.24-buster

WORKDIR /workspaces/frontend

# Copy the source code
COPY . .

# Install dependencies
RUN npm install

# Expose the port
EXPOSE 4200

# Copy the bash script for setting the BACKEND_URL
COPY setenv_proxy.sh /workspaces/frontend/setenv_proxy.sh

RUN apt-get update && apt-get install -y \
  postgresql-client \
  iputils-ping \
  curl \
  iproute2 \
  net-tools \
  nano

# Make the script executable
RUN chmod +x /workspaces/frontend/setenv_proxy.sh

CMD ["sh", "-c", "./setenv_proxy.sh && npm start"]