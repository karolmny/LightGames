from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, "game/index.html")

def snake(request):
    return render(request, "game/snake/snake.html")

def eat(request):
    return render(request, "game/eat/eat.html")

def catchCupcakes(request):
    return render(request, "game/catchCupcakes/catchCupcakes.html")

def floppyFish(request):
    return render(request, "game/floppyFish/fish.html")

def juggle(request):
    return render(request, "game/juggle/juggle.html")