from django import forms

class UserDetailForm(forms.Form):
    name = forms.CharField(max_length=100)
    phone = forms.CharField(max_length=15)
    resume = forms.FileField()
    email = forms.EmailField()
