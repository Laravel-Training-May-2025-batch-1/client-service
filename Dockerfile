# Simplified Dockerfile to avoid circular dependency
FROM node:22 AS app

# Set working directory
WORKDIR /app

# Copy application files
COPY . .

# Ensure entrypoint.sh is copied and executable
COPY entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

# Convert entrypoint.sh to Unix line endings
RUN apt-get update && apt-get install -y dos2unix \
    && dos2unix /usr/local/bin/entrypoint.sh

# Expose port 3000
EXPOSE 3000