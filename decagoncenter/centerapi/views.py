from django.shortcuts import render
from .models import User
from .serializer import Serializer
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
class Users(APIView):

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
