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
    allphoto = models.gallery.objects.all()
    data = {
        'allphoto':allphoto

    }
    return render(requests,'gallery.html',data)


def ABOUT(requests):
    properties = models.exploreproperties.objects.all()
    allphoto = models.aboutphoto.objects.all()
 
    data = {
        'properties':properties,
        'allphoto':allphoto,
    }

    return render(requests,'about.html',data)


def PACKAGES(requests):
    return render(requests,'packages.html')


def CARRIER(requests):
    return render(requests,'carrier.html')


def TESTIMONIAL(requests):
    return render(requests,'testimonial.html')