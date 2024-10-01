from django.shortcuts import render
from app import models
# Create your views here.

def HOME(requests):
    explore = models.exploreproperties.objects.all()
    photo = models.ourcommunity.objects.all()

    data = {
        'explore':explore,
        "ourcommunity":photo,
    }

    return render(requests,'base.html')


def CONTACT(requests):
    return render(requests,'contact.html')


def GALLERY(requests):
    return render(requests,'gallery.html')


def ABOUT(requests):
    return render(requests,'about.html')


def PACKAGES(requests):
    return render(requests,'packages.html')


def CARRIER(requests):
    return render(requests,'carrier.html')


def TESTIMONIAL(requests):
    return render(requests,'testimonial.html')