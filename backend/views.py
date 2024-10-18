from django.shortcuts import render,redirect
from app import models
from django.core.mail import EmailMessage, BadHeaderError
from django.core.exceptions import ValidationError
from .forms import UserDetailForm



def HOME(requests):
    properties = models.exploreproperties.objects.all()
    photo = models.ourcommunity.objects.all()
    media = models.newsmedia.objects.all()

    data = {
        'properties':properties,
        "ourcommunity":photo,
        "media":media,
    }

    return render(requests,'base.html',data)



def submit_resume(request):

    if request.method == 'POST':
        form = UserDetailForm(request.POST)
        print(form)

        
        if form.is_valid():
                email = form.cleaned_data['email']
                print(email)

                # Create email content
                hr_email = 'krishnakumarqaz0@gmail.com'  # Replace with the actual HR email
                subject = 'New Resume Submission'
                message = f"""
                New Resume Submission:
                
            
                Email: {email}
               
                """

                # Create email object
                email_message = EmailMessage(
                    subject,  # Subject of the email
                    message,  # Body of the email
                    email,    # From email (user's email)
                    [hr_email]  # To email (HR email)
                )

              
                email_message.send()
                print(email_message)
               
        else:
            error_message = "There was an issue with the information you provided. Please check and try again."
            print(error_message, 'notvalid')
    
    else:
        form = UserDetailForm()
        print("Not port methods")

    return redirect('base') 
    return render(request, 'base.html', {'form': form,})
