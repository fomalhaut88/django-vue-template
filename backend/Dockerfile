FROM python:3.9

WORKDIR /app

RUN apt-get update
RUN pip install --upgrade pip

RUN pip install uWSGI==2.0.21
COPY requirements.txt .
RUN pip install -r requirements.txt

EXPOSE 8000

COPY . .

ENTRYPOINT ["/app/entrypoint.sh"]

CMD uwsgi --ini ./uwsgi.ini
