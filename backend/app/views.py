from functools import wraps

from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from rest_framework import viewsets, mixins
from rest_framework.exceptions import PermissionDenied
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny

from . import serializers, models


class UserViewSet(viewsets.GenericViewSet):
    serializer_class = serializers.UserSerializer
    queryset = User.objects.all()
    permission_classes = [IsAuthenticated]

    @action(detail=False, methods=['get'], url_path='info')
    def info(self, request):
        serializer = self.serializer_class(request.user)
        return Response(serializer.data)

    @action(detail=False, methods=['post'], url_path='login', 
            permission_classes=[AllowAny])
    def login(self, request):
        username = request.data.get('username', '')
        password = request.data.get('password', '')

        user = authenticate(username=username, password=password)

        if user is None:
            raise PermissionDenied('Wrong username or password')

        login(request, user)

        serializer = self.serializer_class(user)
        return Response(serializer.data)

    @action(detail=False, methods=['get'], url_path='logout')
    def logout(self, request):
        logout(request)
        return Response({'success': True})


class NoteViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = serializers.NoteSerializer
    queryset = models.Note.objects.order_by('id')
