from django.test import TestCase

# Create your tests here.
class TestAPI(TestCase):
    def test_integer(self):
        self.assertEqual(2, 2)
