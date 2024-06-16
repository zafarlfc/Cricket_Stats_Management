from django.urls import path
from . import views

urlpatterns = [
    path('', views.home),
    path('form/', views.form),
    path('menu/', views.languages),
]