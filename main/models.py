from django.db import models


# Create your models here.
class Subscriber(models.Model):

    def __str__(self):
        return self.email

    email = models.EmailField(max_length=256)
    currently_subscribed = models.BooleanField(default=True)
