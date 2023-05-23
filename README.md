# django-vue-template

This is a template project for an application that has frontend part (on Vue.js),
backend part (on Django) and a database (postgreSQL). It supports `docker-compose`
so it can be easily deployed on a single machine. This solution is convenient for
lite weighted CRM systems for example.

## How to run

All you need is to run it with `docker-compose`:

```
docker-compose up --build
```

Also you may need to configure superuser inside the backend container.

Follow http://localhost:8081 and http://localhost:8001/admin to see the result.

## Used technologies

- Django
- Django REST Framework
- Vue.js 2
- PostgreSQL
- Docker
- Buefy
- SASS
