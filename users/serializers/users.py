from rest_framework import serializers
from users.models import (
					User
				)




class StringSerializer(serializers.StringRelatedField):
    def to_internal_value(self, value):
        return value



class UserListDetailSerializer(serializers.ModelSerializer):

	class Meta:
		model = User
		fields = "__all__"
