# Ensure help is shown as the default and fallback target
.DEFAULT_GOAL := help

# Build the Docker image
build:
	docker-compose down --volumes --rmi all --remove-orphans
	docker-compose build

# Start the application using Docker Compose
up:
	docker-compose up -d

# Stop the application using Docker Compose
stop:
	docker-compose stop

# Stop the application using Docker Compose
down:
	docker-compose down --volumes --rmi all --remove-orphans

# Access the container shell using Docker Compose
shell:
	docker exec -it client-service /bin/bash

# Help message
help:
	@echo "Available targets:"
	@echo "  build   - Build the Docker image"
	@echo "  up      - Start the application using Docker Compose"
	@echo "  stop    - Stop the application using Docker Compose"
	@echo "  down    - Stop the application using Docker Compose"
	@echo "  shell   - Access the container shell using Docker Compose"

# Fallback for invalid targets
%:
	@echo "Invalid target: $@"
	@echo "Showing help instead..."
	@make help
