from django.contrib import admin
from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import *
router = DefaultRouter()
router.register('register', RegisterViewset, basename='register')
urlpatterns = router.urls

