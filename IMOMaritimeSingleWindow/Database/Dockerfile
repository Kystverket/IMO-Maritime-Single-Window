# ./db/Dockerfile
FROM postgres:13-alpine

# Set environment variables
ENV POSTGRES_PASSWORD=password \
    POSTGRES_USER=postgres

# Copy the SQL script to initialize the database
COPY ./Create_and_populate_DB.sql /docker-entrypoint-initdb.d/

# Healthcheck command
HEALTHCHECK --interval=30s --timeout=10s --start-period=10s --retries=10 \
    CMD pg_isready -U $POSTGRES_USER || exit 1

# Expose the port
EXPOSE 5432
