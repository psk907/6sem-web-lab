# Dockerfile for React client

# Build react client
FROM node:16-alpine

# Working directory be app
WORKDIR /app

COPY package*.json ./

###  Installing dependencies

RUN yarn

RUN npm run build

RUN npm start

RUN ls

# copy local files to app folder
COPY . .

EXPOSE 3000

CMD ["npm","start"]