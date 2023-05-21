FROM ubuntu:latest
FROM node:20

WORKDIR /node/src
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "tail", "-f", "/dev/null" ]
