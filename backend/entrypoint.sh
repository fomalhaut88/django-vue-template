#!/bin/bash

python manage.py migrate --noinput
python manage.py collectstatic --noinput
python manage.py createsuperuser --noinput

exec "$@"
