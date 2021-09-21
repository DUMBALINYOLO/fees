import uuid
from django.db import models
from datetime import date
from django.utils import timezone
from .accounts import User
from django.contrib.auth.models import BaseUserManager


class StudentManager(BaseUserManager):
    def get_queryset(self, *args, **kwargs):
        return super().get_queryset(*args, **kwargs).filter(type='student')


    def create_student(
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
        student = Student(
                    username=username,
                    email=self.normalize_email(email),
                    gender =gender,
                    first_name =first_name,
                    middle_name =middle_name,
                    last_name =last_name,
                )
        student.set_password(password)
        student.save()
        return student


class Student(User):
    base_type = 'student'
    objects = StudentManager()


    class Meta:
        proxy  = True
