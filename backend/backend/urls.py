from django.contrib import admin
from django.urls import path, include
from django.views.static import serve
from django.conf import settings
from django.conf.urls.static import static

# urlpatterns = [
#     path(settings.BACKEND_ROOT, include([
#         path('admin/', admin.site.urls),
#         path('api/', include('app.urls')),
#     ]))
# ] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('app.urls')),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]

"""
curl -i -X POST http://dev.local/api-auth/login/ \
    -d 'username=admin&password=qwerty123&csrfmiddlewaretoken=8A82DPMtWTvxVN5T55sNi9HROy5fo8gR' \
    -H "Content-Type: application/x-www-form-urlencoded" \
    -H "Cookie: csrftoken=8A82DPMtWTvxVN5T55sNi9HROy5fo8gR"
"""
