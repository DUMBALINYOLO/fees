
from django.contrib import admin
from django.urls import path, re_path, include
from django.conf import settings
from django.conf.urls.static import static
from .views import index

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path('api/users/', include('users.urls')),
    re_path('api/fees/', include('fees.urls')),
    path('', index),

]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
