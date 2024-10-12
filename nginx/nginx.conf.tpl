worker_processes  1;


events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    sendfile        on;

    keepalive_timeout  65;

    server {
        listen 80;
        server_name localhost;

        location $BACKEND_ROOT {
            proxy_set_header Host $host;
            proxy_set_header X-Forwarded-For $remote_addr;
            proxy_pass http://backend:8000;
        }

        location $FRONTEND_ROOT {
            proxy_pass http://frontend:80/;
        }
    }
}
