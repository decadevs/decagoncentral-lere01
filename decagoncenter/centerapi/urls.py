from django.urls import path
from .views import Users

urlpatterns = [
    path('create_user/', Users.as_view(), name = 'create'),
]