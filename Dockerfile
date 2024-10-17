# Use the official Node.js image
FROM node:21-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy only package.json and yarn.lock first
COPY package*.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application files
COPY . .

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["yarn", "start:dev"]