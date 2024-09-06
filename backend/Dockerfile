FROM python:3.9.19

WORKDIR /app

RUN apt-get update
RUN pip install --upgrade pip

RUN pip install uWSGI==2.0.24
COPY requirements.txt .
RUN pip install -r requirements.txt

EXPOSE 8000

COPY . .

ARG ADMIN_PWD

ENV DJANGO_SUPERUSER_USERNAME=admin
ENV DJANGO_SUPERUSER_PASSWORD=$ADMIN_PWD
ENV DJANGO_SUPERUSER_EMAIL=django-vue-template@gmail.com

ENTRYPOINT ["sh", "entrypoint.sh"]

CMD uwsgi --ini ./uwsgi.ini
