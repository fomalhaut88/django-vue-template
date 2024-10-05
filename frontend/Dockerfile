FROM node:18.20.4-alpine as build-stage

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ARG VUE_APP_API_ROOT
ENV VUE_APP_API_ROOT=$VUE_APP_API_ROOT
RUN npm run build

FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY prod_nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
