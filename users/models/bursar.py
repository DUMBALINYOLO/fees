import uuid
from django.db import models
from datetime import date
from django.utils import timezone
from .accounts import User
from django.contrib.auth.models import BaseUserManager


class BursarManager(BaseUserManager):
    def get_queryset(self, *args, **kwargs):
        return super().get_queryset(*args, **kwargs).filter(type='bursar')


    def create_bursar(
                    self,
                    email,
                    username,
                    gender,
                    first_name,
                    middle_name,
                    last_name,
                    password=None
                ):
        if email is None:
            raise TypeError('Users must have an email address.')
        bursar = Bursar(
                    username=username,
                    email=self.normalize_email(email),
                    gender =gender,
                    first_name =first_name,
                    middle_name =middle_name,
                    last_name =last_name,
                )
        bursar.set_password(password)
        bursar.save()
        return bursar


class Bursar(User):
    base_type = 'bursar'
    objects = BursarManager()


    class Meta:
        proxy  = True
