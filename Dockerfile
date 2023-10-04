# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory within the container
WORKDIR /frontend

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Build the Nuxt 3 application
RUN npm run build

# Expose the port your Nuxt 3 app is running on (default: 3000)
EXPOSE 3000

# Define the command to start your Nuxt 3 app
CMD ["npm", "start"]
