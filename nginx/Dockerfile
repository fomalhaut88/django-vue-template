FROM nginx:stable-alpine-slim

COPY ./nginx.conf.tpl /
COPY ./entrypoint.sh /

ENTRYPOINT ["sh", "/entrypoint.sh"]

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
