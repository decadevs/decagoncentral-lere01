import os
import dj_database_url
from decouple import config


def generate_url(DEBUG, url):
    if DEBUG == False:

        return {"default": {
            "ENGINE": 'django.db.backends.postgresql',
            "HOST": url,
            "NAME": "db_name",                      
            "USER": "db_user",
            "PASSWORD": "db_user_password",
        }}
    else:
        return {
            'default': {
                'ENGINE': 'django.db.backends.sqlite3',
                'NAME': os.path.join(config("BASE_DIR"), 'db.sqlite3'),
            }
        }
