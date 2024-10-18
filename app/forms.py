from django import forms

class UserDetailForm(forms.Form):
    name = forms.CharField(max_length=100)
    email = forms.EmailField()
    phone = forms.CharField(max_length=15,required=True)
    resume = forms.FileField(required=True)

class contact_detail_form(forms.Form):
    name = forms.CharField(max_length=100)
    email = forms.EmailField()
    phone = forms.CharField(max_length=15)
    comment = forms.CharField(max_length=300)
