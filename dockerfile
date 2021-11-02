FROM node:14.16.1-alpine3.12

WORKDIR /app

COPY . /app

RUN npm install

RUN npm rebuild node-sass --force

CMD [ "npm", "run", "start" ]