FROM node:18-alpine

WORKDIR /app

COPY package.json ./

COPY yarn.lock ./

COPY ./ ./

RUN npm i

ENV PORT 3000

ENV REACT_APP_REST_API_HOST http://localhost:3050/server/

ENV REACT_APP_NODE_ENV production

CMD ["npm", "run", "start"]