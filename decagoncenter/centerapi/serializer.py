from rest_framework.serializers import ModelSerializer
from .models import User

class Serializer(ModelSerializer):
    class Meta:
        model = User
        fields = ('fullname', 'position', 'email')
