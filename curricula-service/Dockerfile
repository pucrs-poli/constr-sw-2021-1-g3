FROM node:14

ENV PORT=5000

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json .
RUN npm install
ADD . /usr/src/app

EXPOSE 5000

#STARTING APP
CMD [ "npm", "start" ]