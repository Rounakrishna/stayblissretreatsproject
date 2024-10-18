from app import models
from django.shortcuts import render,redirect
from django.core.mail import EmailMessage, BadHeaderError
from django.core.exceptions import ValidationError
from .forms import UserDetailForm,contact_detail_form
from django.core.mail import send_mail
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


def submit_resume(request):

    if request.method == 'POST':
        form = UserDetailForm(request.POST, request.FILES)
        
        if form.is_valid():
            name = form.cleaned_data['name']
            phone = form.cleaned_data['phone']
            email = form.cleaned_data['email']
            resume = form.cleaned_data['resume']

            # Create email content
            hr_email = 'sales@stayblissretreats.com'  # Replace with actual HR email
            subject = 'New Resume Submission'
            message = f"Name: {name}\nEmail: {email}\nPhone: {phone}"
            email_message = EmailMessage(subject, message, email, [hr_email])
            email_message.attach(resume.name, resume.read(), resume.content_type)
     
            email_message.send()
        else:
            print("not valid")
            # print(form.errors)
            print(form.errors.as_json())
        
               
    
    else:
        print("not post")
        form = UserDetailForm()

    return redirect('carrier') 



def contact_form(request):

    if request.method == 'POST':
        form = contact_detail_form(request.POST, request.FILES)
        
        if form.is_valid():
            name = form.cleaned_data['name']
            phone = form.cleaned_data['phone']
            email = form.cleaned_data['email']
            comment = form.cleaned_data['comment']
          
                      # Create email content
            hr_email = 'sales@stayblissretreats.com'
            subject = 'New Contact Form Submission'
            message = f"Name: {name}\nEmail: {email}\nPhone: {phone}\nComments: {comment}"
            email_message = EmailMessage(subject, message, email, [hr_email])
     
            email_message.send()
        else:
            print("not valid")
            # print(form.errors)
            print(form.errors.as_json())
               
    
    else:
        form = UserDetailForm()

    return redirect('contact') 
