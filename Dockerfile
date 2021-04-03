FROM node

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wilcard is used to ensure both package.json AND package-lock.json are copied
# where avaliable (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

#Bundle app source
COPY . .

EXPOSE 3001
CMD ["npm", "start"]