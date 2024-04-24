# Use an official Node.js runtime as the base image
FROM node:21

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your application's source code to the working directory
COPY . .

ENV PORT=8080

EXPOSE 8080

# Define the command to run the application
CMD ["npm", "run", "dev"]
