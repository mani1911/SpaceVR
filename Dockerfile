FROM node:latest

WORKDIR /app

COPY . .
RUN yarn install

CMD ["node", "index.js"]

EXPOSE 3000