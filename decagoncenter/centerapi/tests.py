from django.test import TestCase
from .models import User
from rest_framework import status
from django.urls import reverse

# Create your tests here.
class TestModel(TestCase):
    def setUp(self):
        self.user_name = 'new_user'
        self.user_username = 'okanlomo'
        self.user_email = 'foo@example.com'
        self.user_password = 'kolap129'
        self.user_position = 'Lead Trainer'
        self.user = User(fullname = self.user_name, username = self.user_username, email = self.user_email, 
            password = self.user_password, position = self.user_position)

    def test_successful_bucket_create(self):
        self.first_count = User.objects.count()
        self.user.save()
        self.count_again = User.objects.count()
        
        self.assertNotEqual(self.first_count, self.count_again)

class TestView(TestCase):
    def test_successful_post(self):
        data = {'fullname':'new_user', 'username':'okanlomo', 'email':'foo@example.com', 'password':'kolap129', 'position':'Lead Trainer'}
        url = reverse('create')
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)


    def test_unsuccessful_post_invalid_password_supplied(self):
        data = {'fullname':'new_user', 'username':'okanlomo', 'email':'foo@example.com', 'password':'kolap1290', 'position':'Lead Trainer'}
        url = reverse('create')
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_unsuccessful_post_password_not_supplied(self):
        data = {'fullname':'new_user', 'username':'okanlomo', 'email':'foo@example.com', 'position':'Lead Trainer'}
        url = reverse('create')
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_unsuccessful_post_position_not_supplied(self):
        data = {'fullname':'new_user', 'username':'okanlomo', 'email':'foo@example.com', 'password':'kolap129'}
        url = reverse('create')
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
