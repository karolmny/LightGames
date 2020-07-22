from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("snake/", views.snake, name="snake"),
    path("eat/", views.eat, name="eat"),
    path("catchCupcakes/", views.catchCupcakes, name="catchCupcakes"),
]