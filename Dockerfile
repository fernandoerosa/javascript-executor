FROM node:20.15-alpine3.20 AS builder

WORKDIR /app

COPY . .

RUN npm install && \
    npm run build

FROM node:20.15-alpine3.20

WORKDIR /app

COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/docker /app/docker
COPY --from=builder /app/package.json /app/package.json

EXPOSE 3001

ENTRYPOINT [ "sh", "/app/docker/entrypoint.sh" ]
