# Use official Node.js image as base
FROM node:22.2.0 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Set working directory for the build
WORKDIR /app

# Build the application
RUN npm run build

# Use lightweight Node.js image as final base
FROM node:22.2.0

# Set working directory
WORKDIR /app

# Copy built app from builder stage
COPY --from=builder /app/build ./build

# Install serve to serve the static files
RUN npm install -g serve

# Expose port
EXPOSE 3000

# Run the app
CMD ["serve", "-s", "build"]
