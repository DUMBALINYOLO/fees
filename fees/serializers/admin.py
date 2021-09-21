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
	targets = serializers.SerializerMethodField()
	type = serializers.SerializerMethodField()


	class Meta:
		model = Fee
		fields = [
			'id',
			'name',
			'targets',
			'type',
			'amount',
		]

	def get_targets(self, obj):
		return obj.get_targets_display()


	def get_type(self, obj):
		return obj.get_type_display()




class InvoiceLineCreateSerializer(serializers.ModelSerializer):

	class Meta:
		model = InvoiceLine
		fields = ['pk', 'fee', 'quantity', 'discount']



class InvoiceLineListSerializer(serializers.ModelSerializer):
	fee = StringSerializer()


	class Meta:
		model = InvoiceLine
		fields = [
			'id',
			'fee',
			'discount',
			'total',
			'value',
			'reference_number',
		]




class InvoiceCreateUpdateSerializer(WritableNestedModelSerializer):
	lines = InvoiceLineCreateSerializer(many=True)

	class Meta:
		model = Invoice
		fields = [
			'id',
			'student',
			'validated_by',
			'bookkeeper',
			'due',
			'terms',
			'comments',
			'lines',
		]




class InvoiceDetailSerializer(serializers.ModelSerializer):
	lines = InvoiceLineListSerializer(many=True, read_only=True)
	bookkeeper = StringSerializer()


	class Meta:
		model = Invoice
		fields = [
			'id',
			'tracking_number',
			'student',
			'bookkeeper',
			'due',
			'terms',
			'comments',
			'lines',
			'total',
			'overdue_days',
			'on_credit',
			'total_paid',
			'total_due',
			'returned_total',
		]



class PaymentCreateUpdateSerializer(serializers.ModelSerializer):


	class Meta:

		model = Payment
		fields = [
			'id',
			'amount',
			'invoice',
			'method',
			'cashier',
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
			'entry',
		]
