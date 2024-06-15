from django import forms


class DemoForm(forms.Form):
    name = forms.CharField(widget=forms.Textarea(attrs={"rows": 5}))
    email = forms.EmailField(label="Enter email address")
    date = forms.DateField(widget=forms.widgets.NumberInput(attrs={"type": "date"}))