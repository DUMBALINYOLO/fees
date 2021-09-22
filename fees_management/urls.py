
from django.contrib import admin
from django.urls import path, re_path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path('api/users/', include('users.urls')),
    re_path('api/fees/', include('fees.urls')),
]
