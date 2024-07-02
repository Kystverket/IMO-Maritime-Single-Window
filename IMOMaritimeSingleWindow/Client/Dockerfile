# ./Client/Dockerfile
FROM node:10.24-slim

WORKDIR /workspaces/frontend

# Copy the source code
COPY . .

# Install dependencies
RUN npm install

# Expose the port
EXPOSE 4200

# Set the entrypoint command
CMD ["sh", "-c", "npm start"]
