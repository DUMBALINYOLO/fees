from rest_framework import viewsets, generics, permissions, status
from knox.auth import TokenAuthentication
from rest_framework.decorators import action
from django.shortcuts import get_object_or_404
from django.contrib.auth import get_user_model
from django.db.models import Q as ComplexQueryLookUp
from users.models import (
					User
				)

from rest_framework.response import Response
from users.serializers import (
						UserListDetailSerializer

                    )


class UserViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.IsAuthenticated,]
	serializer_class = UserListDetailSerializer
	queryset = User.objects.prefetch_related(
									'account'
								)
