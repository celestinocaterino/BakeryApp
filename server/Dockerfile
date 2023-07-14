FROM node:18-alpine

WORKDIR /app

COPY package.json ./

COPY yarn.lock ./

COPY ./ ./

RUN yarn install

ENV NODE_ENV production

ENV PORT 3001

ENV CORS_ORIGIN *

CMD ["npm", "run", "start"]