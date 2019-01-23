# Specify a base image
FROM node:alpine

# Set up a working directory
WORKDIR /usr/app

# Copy local files to remote image
COPY . .

# Install some dependencies
RUN npm install --only=prod

# Run a startup command
CMD ["npm", "start"]