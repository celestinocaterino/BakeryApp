FROM node:18-alpine

WORKDIR /app

COPY package.json ./

COPY yarn.lock ./

COPY ./ ./

RUN npm i

ENV PORT 3001

CMD ["npm", "run", "start"]