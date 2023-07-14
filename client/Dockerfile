FROM node:18-alpine

WORKDIR /app

COPY package.json ./

COPY yarn.lock ./

COPY ./ ./

RUN npm i

CMD ["npm", "run", "start"]