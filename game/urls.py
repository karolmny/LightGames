from django.urls import path

from . import views

app_name = "game"
urlpatterns = [
    path("", views.index, name="index"),
    path("snake/", views.snake, name="snake"),
    path("eat/", views.eat, name="eat"),
    path("catchCupcakes/", views.catchCupcakes, name="catchCupcakes"),
    path("floppyFish/", views.floppyFish, name="floppyFish"),
    path("juggle/", views.juggle, name="juggle"),

    #Nettsiden
    path("aboutUs/", views.aboutUs, name="aboutUs"),
]