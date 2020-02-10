from rest_framework.serializers import ModelSerializer
from .models import User

class Serializer(ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        # fields = ('fullname', 'position', 'email')
