#!/bin/bash

python manage.py migrate
echo "yes" | python manage.py collectstatic

exec "$@"
