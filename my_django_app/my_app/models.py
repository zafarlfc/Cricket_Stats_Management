from django.db import models
from django import forms

# Create your models here.

class Menu(models.Model):
    name = models.CharField(max_length=100)
    cuisine = models.CharField(max_length=100)
    price = models.IntegerField()

class DemoForm(forms.Form):
    name = forms.CharField(widget=forms.Textarea(attrs={"rows": 5}))
    email = forms.EmailField(label="Enter email address")
    date = forms.DateField(widget=forms.widgets.NumberInput(attrs={"type": "date"}))