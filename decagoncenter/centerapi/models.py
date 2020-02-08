from django.db import models
from django.core.validators import MinLengthValidator

# Create your models here.
class User(models.Model):
    fullname = models.CharField(max_length = 200, blank = False)
    username= models.CharField(max_length = 50, unique = True, blank = False)
    email = models.EmailField(blank = False)
    password = models.CharField(max_length=8, validators=[MinLengthValidator(8)], unique = True, blank = False)
    position = models.CharField(max_length = 50, blank = False)

    def __str__(self):
        return self.name

