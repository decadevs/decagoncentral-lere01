from django.db import models
from django.core.validators import MinLengthValidator

# Create your models here.
class User(models.Model):
    fullname = models.CharField(max_length = 200)
    username= models.CharField(max_length = 50, unique = True)
    email = models.EmailField()
    password = models.CharField(max_length=8, validators=[MinLengthValidator(8)], unique = True)
    position = models.CharField(max_length = 50)

    def __str__(self):
        return self.name

