from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from . import serializers, models


class NoteViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = serializers.NoteSerializer
    queryset = models.Note.objects.order_by('id')
