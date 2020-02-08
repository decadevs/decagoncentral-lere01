    FROM python:3

    LABEL "Author": "Faith O. Oyedemi"
    LABEL version = "0.1"
    LABEL "Description": "An api to be consumed by a database application"

    ADD ./decagoncenter /app
    WORKDIR /app

    RUN python -m pip install --upgrade pip
    RUN pip install -r requirements.txt
    RUN python manage.py migrate
    
