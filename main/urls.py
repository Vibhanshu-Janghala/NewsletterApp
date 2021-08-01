from django.urls import path
from . import views

urlpatterns = [
    path('add/', views.add_subscriber, name='add_subscriber'),
    path('getAll/', views.get_all_subscribers, name='get_subscribers'),
    path('', views.home, name='home')
]
