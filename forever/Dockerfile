FROM node
MAINTAINER Nicolas Ritouet <nicolas@mycs.com>

EXPOSE 3000

COPY . /app
WORKDIR /app

RUN npm install coffee-script -g
RUN npm install forever -g

CMD forever -c coffee server.coffee
