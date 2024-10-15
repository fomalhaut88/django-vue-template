from django.contrib import admin
from django.conf import settings

from . import models


@admin.register(models.Note)
class NoteAdmin(admin.ModelAdmin):
    list_display = ('id', 'created_at', 'text')


admin.site.site_url = settings.FRONTEND_ROOT
