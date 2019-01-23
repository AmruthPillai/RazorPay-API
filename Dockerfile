# Specify a base image
FROM node:alpine

# Copy local files to remote image
COPY . .

# Install some dependencies
RUN npm install --only=prod

# Run a startup command
CMD ["npm", "start"]