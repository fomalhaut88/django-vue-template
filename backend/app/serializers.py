from rest_framework.serializers import ModelSerializer

from . import models


class NoteSerializer(ModelSerializer):
    class Meta:
        model = models.Note
        fields = ('id', 'created_at', 'text')
        read_only_fields = ('created_at',)
