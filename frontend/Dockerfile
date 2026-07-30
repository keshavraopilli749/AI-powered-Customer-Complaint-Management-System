# syntax=docker/dockerfile:1

# Build Stage
FROM node:20-alpine as builder

WORKDIR /app
COPY package.json package-lock.json* ./

RUN npm ci

COPY . .
RUN npm run build

# Serve Stage
FROM nginx:alpine

# Copy custom nginx configuration if needed
# COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
