from django.contrib import admin
from .models import Subscriber


# Register your models here.

class SubscriberAdmin(admin.ModelAdmin):
    fields = ("email", "currently_subscribed")


admin.site.register(Subscriber, SubscriberAdmin)
