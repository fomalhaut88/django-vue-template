from django.contrib.auth.models import User
from rest_framework.serializers import ModelSerializer

from . import models


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'first_name', 'is_staff')
        read_only_fields = ('username', 'email', 'first_name', 'is_staff')


class NoteSerializer(ModelSerializer):
    class Meta:
        model = models.Note
        fields = ('id', 'created_at', 'text')
        read_only_fields = ('created_at',)
