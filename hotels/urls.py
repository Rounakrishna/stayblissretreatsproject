from django.urls import path,include
from . import views

urlpatterns = [
        path('littleheartresort/',views.LITTLE_HEART_RESORT,name='littleheartresort'),
    
]


