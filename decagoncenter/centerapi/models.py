from django.db import models
from django.core.validators import MinLengthValidator
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
from django.contrib import auth

# # Create your models here.
# class User(models.Model):
#     fullname = models.CharField(max_length = 200, blank = False)
#     username= models.CharField(max_length = 50, unique = True, blank = False)
#     email = models.EmailField(blank = False)
#     password = models.CharField(max_length=8, validators=[MinLengthValidator(8)], unique = True, blank = False)
#     position = models.CharField(max_length = 50, blank = False)

#     def __str__(self):
#         return self.fullname

# # Create your models here.
class User(auth.models.User):
    fullname = models.CharField(max_length = 200, blank = False)
    # username= models.CharField(max_length = 50, unique = True, blank = False)
    # email = models.EmailField(blank = False)
    # password = models.CharField(max_length=8, validators=[MinLengthValidator(8)], unique = True, blank = False)
    position = models.CharField(max_length = 50, blank = False)

    # def __str__(self):
    #     return self.fullname

@receiver(post_save, sender=User)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)