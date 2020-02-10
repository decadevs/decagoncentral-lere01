from django.shortcuts import render
from .models import User
from .serializer import Serializer
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token

# Create your views here.
class CreateUser(APIView):

    def get(self, request, format='json'):
        user = User.objects.all()
        serializer = Serializer(user, many=True)
        return Response(serializer.data, status = status.HTTP_200_OK)

    def post(self, request, format = 'json'):
        user = request.data
        serialize = Serializer(data = user)

        if serialize.is_valid(raise_exception = True):
            serialize.save()
            return Response(serialize.data, status = status.HTTP_201_CREATED)

        return Response(serialize.errors, status = status.HTTP_400_BAD_REQUEST)


class GetUser(APIView):
    # def get(self, request, email, password, format='json'):
    #     user = User.objects.all()
    #     serializer = Serializer(user, many=True)
    #     return Response('Successful', status = status.HTTP_200_OK)

    def post(self, request):
    
        data = request.data

        try:
            username = data['username']
            password = data['password']
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        try:
            user = User.objects.get(username=username, password=password)
        except:
            return Response(status=status.HTTP_401_UNAUTHORIZED)

        try:
            user_token = user.auth_token.key
        except:
            user_token = Token.objects.create(user=user)

        data = {'token': user_token}
        return Response(data=data, status=status.HTTP_200_OK)
