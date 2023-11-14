from rest_framework.routers import SimpleRouter

from . import views


router = SimpleRouter(trailing_slash=False)
router.register(r'users', views.UserViewSet, basename='user')
router.register(r'notes', views.NoteViewSet, basename='note')
urlpatterns = router.urls
