#!/bin/bash

python manage.py migrate --noinput && \
python manage.py collectstatic --noinput && \
(python manage.py createsuperuser --noinput || true)

if [ $? -eq 0 ]; then
    exec "$@"
fi
