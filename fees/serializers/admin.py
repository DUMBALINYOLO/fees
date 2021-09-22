from rest_framework import serializers
from fees.models import (
						Invoice,
						InvoiceLine,
						Fee,
						Payment,

					)
from drf_writable_nested.serializers import WritableNestedModelSerializer

class StringSerializer(serializers.StringRelatedField):

    def to_internal_value(self, value):
        return value



class FeeCreateUpdateSerializer(serializers.ModelSerializer):

	class Meta:
		model = Fee
		fields = [
			'id',
			'name',
			'targets',
			'type',
			'amount',
		]



class FeeListDetailSerializer(serializers.ModelSerializer):


	class Meta:
		model = Fee
		fields = [
			'id',
			'name',
			'targets',
			'type',
			'amount',
		]



class InvoiceLineCreateSerializer(serializers.ModelSerializer):

	class Meta:
		model = InvoiceLine
		fields = ['pk', 'fee', 'quantity']



class InvoiceLineListSerializer(serializers.ModelSerializer):
	fee = StringSerializer()


	class Meta:
		model = InvoiceLine
		fields = [
			'id',
			'fee',
			'total',
			'price',
			'quantity',
			'reference_number',
		]




class InvoiceCreateUpdateSerializer(WritableNestedModelSerializer):
	lines = InvoiceLineCreateSerializer(many=True)

	class Meta:
		model = Invoice
		fields = [
			'id',
			'student',
			'due',
			'lines',
		]




class InvoiceDetailSerializer(serializers.ModelSerializer):
	bookkeeper = StringSerializer()
	student = StringSerializer()


	class Meta:
		model = Invoice
		fields = [
			'id',
			'tracking_number',
			'student',
			'bookkeeper',
			'due',
			'date',
			'terms',
			'comments',
			'total',
			'overdue_days',

			'total_paid',
			'total_due',
			'status',
		]



class PaymentCreateUpdateSerializer(serializers.ModelSerializer):


	class Meta:

		model = Payment
		fields = [
			'id',
			'amount',
			'invoice',
			'method',
			'bookkeeper',
			'comments',
		]



class PaymentListDetailSerializer(serializers.ModelSerializer):
	invoice = StringSerializer()
	bookkeeper = StringSerializer()


	class Meta:

		model = Payment
		fields = [
			'id',
			'reference_number',
			'amount',
			'date',
			'invoice',
			'method',
			'bookkeeper',
			'comments',
			'due',
		]
