FROM node:14

ENV URL_BASE=http://ec2-18-223-107-89.us-east-2.compute.amazonaws.com:8080/auth
ENV PORT=3000
ENV REALM_NAME=master

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
COPY . .

#same from .env
EXPOSE 3000
CMD [ "npm", "start" ]
