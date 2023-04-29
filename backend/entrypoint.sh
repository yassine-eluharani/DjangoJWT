#!/bin/bash -x
python manage.py makemigrations || exit 1
python manage.py migrate --noinput || exit 1
python manage.py loaddata ./static/product_data.json || exit 1
exec "$@"

