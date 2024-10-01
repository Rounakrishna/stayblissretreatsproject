from django.urls import path,include
from . import views

urlpatterns = [

    path('about/',views.ABOUT,name='about'),
    path('contact/',views.CONTACT,name='contact'),
    path('gallery/',views.GALLERY,name='gallery'),
    path('package/',views.PACKAGES,name='packages'),
    path('carrier/',views.CARRIER,name='carrier'),
    path('testimonial/',views.TESTIMONIAL,name='testimonial'),
    
]

