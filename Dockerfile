FROM node:16-alpine:latest

WORKDIR /usr/src/app

ENV NODE_ENV production

COPY package*.json ./
RUN npm install

COPY .env.production ./.env

COPY . .

RUN npm run build
RUN npm run m:run

EXPOSE 3000
CMD ["npm", "run", "start:prod"]