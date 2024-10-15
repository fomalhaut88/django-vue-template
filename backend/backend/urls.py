from django.contrib import admin
from django.urls import path, include
from django.views.static import serve
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path(settings.BACKEND_ROOT, include([
        path('admin/', admin.site.urls),
        path('api/', include('app.urls')),
    ]))
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
