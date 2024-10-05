from functools import wraps

from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from rest_framework import viewsets
from rest_framework.exceptions import PermissionDenied
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from . import serializers, models


def action_login_required(method):
    @wraps(method)
    def wrapper(instance, request, *args, **kwargs):
        if not request.user.is_authenticated:
            raise PermissionDenied('Login required')
        return method(instance, request, *args, **kwargs)
    return wrapper


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.UserSerializer
    queryset = User.objects.all()

    @action(detail=False, methods=['get'], url_path='info')
    @action_login_required
    def info(self, request):
        serializer = self.serializer_class(request.user)
        return Response(serializer.data)

    @action(detail=False, methods=['post'], url_path='login')
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
    @action_login_required
    def logout(self, request):
        logout(request)
        return Response({'success': True})


class NoteViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = serializers.NoteSerializer
    queryset = models.Note.objects.order_by('id')
