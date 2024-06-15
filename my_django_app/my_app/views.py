from django.shortcuts import render
# Create your views here.
from django.http import HttpResponse

from .models import DemoForm

def home(request):
    return HttpResponse("Hello")

def response(request):
    path = request.path
    return HttpResponse(path, content_type='text/html', charset='utf-8')

def form(request):
    form = DemoForm()
    context = {"form": form}
    return render(request, template_name="form.html", context=context)
