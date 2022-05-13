FROM node:14.17.3 

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install 

COPY . .