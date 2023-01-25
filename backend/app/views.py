from rest_framework import viewsets

from . import serializers, models


class NoteViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.NoteSerializer
    queryset = models.Note.objects.all()
