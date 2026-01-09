# Use Ubuntu as the base image (can also use direct node js an start direct from packagejson cmds)
FROM ubuntu

# Update package lists
RUN apt-get update

# Install curl (needed to fetch Node.js setup script)
RUN apt-get install -y curl

# Download and run Node.js 18 setup script
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash -

# Install Node.js
RUN apt-get install -y nodejs

# Clean up apt cache to reduce image size (optional but good practice)
RUN apt-get clean


# Copies our essential files from node server to container [order: source - destination]

COPY package.json package.json 
COPY package-lock.json package-lock.json 
COPY index.js index.js 

# installs the req things inside container 
RUN npm install 

## whenever  this  container runs this is how it should run [entrypoint]
ENTRYPOINT [ "node", "index.js" ]
 