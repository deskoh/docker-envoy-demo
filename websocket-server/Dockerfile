FROM node:alpine

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

COPY index.mjs /app

CMD ["node", "/app"]
