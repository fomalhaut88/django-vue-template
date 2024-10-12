#!/bin/sh

export BACKEND_ROOT
export FRONTEND_ROOT

envsubst '${BACKEND_ROOT} ${FRONTEND_ROOT}' < /nginx.conf.tpl > /etc/nginx/nginx.conf

exec "$@"
