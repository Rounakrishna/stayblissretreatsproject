from django.urls import path,include
from . import views

urlpatterns = [
        path('littleheartresort/',views.LITTLE_HEART_RESORT,name='littleheartresort'),
        path('ayodhyastayhotel/',views.AYODHAYA_STAY_HOTEL,name='ayodhyastayhotel'),
        path('hotelclassichills/',views.HOTEL_CLASSIC_CHILLS,name='hotelclassichills'),
        path('stayblissvilla/',views.STAY_BLISS_VILLA,name='stayblissvilla'),
        path('daffodilcottage/',views.DAFFODIL_COTTAGE,name='daffodilcottage'),
    
]


