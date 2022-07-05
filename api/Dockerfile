# Based on nestjs-prisma-starter https://github.com/notiz-dev/nestjs-prisma-starter
#####################################
# Builder container
#####################################
FROM node:16.15.0 AS builder

# Create app directory
WORKDIR /app

# Install prisma for the migration and seed commands
RUN npm install -g prisma --unsafe-perm
RUN npm install -g prisma-dbml-generator --unsafe-perm

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY tsconfig.json ./
COPY prisma ./prisma/

# Install app dependencies
RUN npm install

# Copy the dev folder to the container
COPY . .

RUN npm run build

FROM node:16.15.0-slim

RUN apt-get update \
  && apt-get upgrade -y \
  && apt-get install -y openssl \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app

RUN npm install -g prisma --unsafe-perm

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/entrypoint.sh ./entrypoint.sh

RUN chmod +x ./entrypoint.sh
ENV PATH="$PATH:node_modules/.bin"

EXPOSE 5000

ENTRYPOINT [ "/bin/sh", "entrypoint.sh" ]
CMD ["node", "dist/src/main"]
