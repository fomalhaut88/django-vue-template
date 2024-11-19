# django-vue-template

This is a template project for an application that has frontend part (on Vue.js),
backend part (on Django) and a database (PostgreSQL). It supports `docker-compose`
so it can be easily deployed on a single machine. This solution is convenient for
lite weighted CRM systems for example.

## Used technologies

- Django
- Django REST Framework
- Vue.js 3
- PostgreSQL
- Docker
- Buefy
- SASS

## How to run in docker

### Step 1. Download source code

```
git clone https://github.com/fomalhaut88/django-vue-template.git --depth=1
```

### Step 2. Run in docker

```
docker-compose up --build
```

### Step 3. Check locally

Open in your browser: http://localhost:18000/frontend

Or http://localhost:18000/backend/admin for Django admin panel.


## How to run locally without docker

### Step 1. Download source code

```
git clone https://github.com/fomalhaut88/django-vue-template.git --depth=1
```

### Step 2. Patch hosts file

Add these lines to your hosts file:

```
127.0.0.1 dev.local
```

For Linux systems the file is usually located in `/etc/hosts`.
For Windows the location is `C:\Windows\System32\drivers\etc\hosts`.

Note: normally hosts file requires administration privileges to modify it.

### Step 3. Nginx configuration

Add the configurations from file [nginx-dev.conf](nginx-dev.conf) to your Nginx config so the domain name `dev.local` will be resolved locally and directed to correct ports related to local frontend and backend servers.

### Step 4. Configure passwords and keys `./backend/.env`

First, copy the file `./backend/.env.example` into `./backend/.env` and set desirable `SECRET_KEY` and `DATABASE_PASSWORD`. Also it is possible to make some other changes if needed but they are optional.

### Step 5. Prepare local PostgreSQL (for local run without docker)

Connect to your PostgreSQL server via terminal by the command and enter the password:

```
psql -U postgres
```

After that, create the database and user with the names and the password configured in `./backend/.env` file:

```
CREATE DATABASE django_vue_template;
\c django_vue_template
CREATE USER django_vue_template WITH PASSWORD 'Ael7CaVu';
GRANT ALL PRIVILEGES ON DATABASE django_vue_template TO django_vue_template;
GRANT ALL PRIVILEGES ON SCHEMA public TO django_vue_template;
ALTER USER django_vue_template CREATEDB;  -- For django tests
```

### Step 6. Install dependencies

#### Frontend server:

```
cd frontend
npm install
```

#### Backend server:

```
cd backend
python -m virtualenv .venv
.\.venv\Scripts\activate  # for Windows or `source ./.venv/bin/activate` for Linux
pip install -r requirements.txt
python manage.py migrate
```

Create superuser for Django admin panel.

```
python manage.py createsuperuser
```

And enter desirable username and password.

### Step 7. Run local servers

#### Frontend server:

```
cd frontend
npm run dev
```

#### Backend server:

```
cd backend
python manage.py runserver
```

### Step 8. Check locally

Open in your browser: http://dev.local/frontend

Or http://dev.local/backend/admin for Django admin panel.
