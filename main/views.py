import json
from django.shortcuts import render, HttpResponse
from .models import Subscriber
from django.core.serializers import serialize
import bleach
from django.views.decorators.csrf import csrf_exempt
from django.core.validators import validate_email


# Create your views here.
@csrf_exempt
def home(request):
    return render(request, 'index.html')


@csrf_exempt
def add_subscriber(request):
    data = json.loads(request.body.decode("utf-8"))
    try:
        validate_email(data["mail"])
        new_subscriber = Subscriber(email=data["mail"])
        new_subscriber.save()
    except Exception:
        return HttpResponse("Request Failed", status=400)
    return HttpResponse("Request Success", status=200)


@csrf_exempt
def get_all_subscribers(request):
    all_subscribers = serialize('json', Subscriber.objects.all())
    return HttpResponse(all_subscribers, content_type='application/json', status=200)
