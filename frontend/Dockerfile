FROM node:20-alpine as build-stage

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

ARG FRONTEND_ROOT
ARG BACKEND_ROOT

ENV NODE_ENV=production
ENV VITE_BASE_URL=$FRONTEND_ROOT
ENV VITE_BACKEND_ROOT=$BACKEND_ROOT

RUN npm run build

FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY prod_nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
