from django.urls import path
from .views import CreateUser, GetUser
from rest_framework.authtoken.views import obtain_auth_token 

urlpatterns = [
    path('create_user/', CreateUser.as_view(), name = 'create'),
    path('get_user/', GetUser.as_view(), name = 'request'),
    path('api-token-auth/', obtain_auth_token, name = 'api-token-auth'),
]