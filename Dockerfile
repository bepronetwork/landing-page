FROM node:16.13 AS builder

WORKDIR /app
RUN apt-get update 
COPY package*.json ./
RUN mkdir scripts
ENV CI=true
RUN npm --silent install --no-audit
COPY . .
RUN npm run build

FROM node:16.13-alpine AS release

WORKDIR /app
COPY package*.json ./
COPY . .
ENV CI=true
RUN npm install --only=production --no-audit
COPY --from=builder /app/.next .next
COPY --from=builder /app/dist dist
CMD npm run start
