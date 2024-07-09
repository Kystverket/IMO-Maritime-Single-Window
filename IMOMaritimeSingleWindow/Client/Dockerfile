# Stage 1: Build the frontend assets
FROM node:10.24-buster AS build

WORKDIR /workspaces/frontend

# Copy the source code
COPY . .

# Install dependencies
RUN npm install

# Build the frontend assets
RUN npm run ng build --prod

# Stage 2: Setup Nginx to serve the frontend assets
FROM nginx:alpine

# Copy the built frontend assets to Nginx wwwroot
COPY --from=build /workspaces/frontend/wwwroot /usr/share/nginx/html

# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["sh", "-c", "envsubst < /etc/nginx/nginx.conf > /etc/nginx/nginx.conf && nginx -g 'daemon off;'"]
