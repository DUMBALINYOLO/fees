from rest_framework import viewsets, permissions, status, viewsets, views
from rest_framework.response import Response
from rest_framework.decorators import action
from django.db.models import Q as ComplexQueryFilter
from fees.models import (
							Invoice,
							InvoiceLine,
							Payment,
							Fee,

						)
from fees.serializers import (
						InvoiceCreateUpdateSerializer,
						InvoiceDetailSerializer,
						InvoiceLineCreateSerializer,
						FeeCreateUpdateSerializer,
						FeeListDetailSerializer,
						PaymentCreateUpdateSerializer,
						PaymentListDetailSerializer,
						InvoiceLineListSerializer,
					)
from knox.auth import TokenAuthentication
from users.models import Bursar, Student


def get_invoice(invoice_id):
	try:
		invoice = Invoice.objects.get(id=invoice_id)
		return invoice
	except Invoice.DoesNotExist:
		return 'Invoice Does Not Exist'


def get_bursar(email):
	try:
		bursar = Bursar.objects.get(email=email)
		return bursar
	except:
		return 'Bursar Does Not Exist'


def get_student(email):
	try:
		student = Student.objects.get(email=email)
		return student
	except:
		return 'Student Does Not Exist'


def student_total_due(transactions):
    return sum([transaction.total_due for transaction in transactions])




class FeeViewSet(viewsets.ModelViewSet):
	queryset = Fee.objects.all().order_by('-id')

	def get_serializer_class(self, *args, **kwargs):
		if self.action in ['create', 'put', 'update', 'patch']:
			return FeeCreateUpdateSerializer
		return FeeListDetailSerializer




class InvoiceViewSet(viewsets.ModelViewSet):
	authentication_classes = [TokenAuthentication, ]
	permission_classes = [permissions.IsAuthenticated,]
	lookup_field = 'id'

	def get_serializer_class(self):
		if self.action in ['list', 'retrieve']:
			return  InvoiceDetailSerializer
		return InvoiceCreateUpdateSerializer


	def create(self, request, *args, **kwargs):
		data = request.data.copy()
		print(data)
		user = request.user
		bursar = get_bursar(user.email)
		student = get_student(data['student'])
		data['bookkeeper'] = bursar.pk
		data['validated_by'] = user.pk
		data['student'] = student.pk
		serializer = self.get_serializer(data=data)
		serializer.is_valid(raise_exception=True)
		self.perform_create(serializer)
		headers = self.get_success_headers(serializer.data)
		return Response(
			serializer.data,
			headers=headers,
			status=status.HTTP_201_CREATED,
		)



	def get_queryset(self, *args, **kwargs):
		queryset = Invoice.objects.prefetch_related(
											'validated_by',
											'student',
											'bookkeeper',

										).order_by('-id')

		return queryset



	@action(detail=True, methods=['post', 'list', 'get', 'create'])
	def pay(self, request, *args, **kwargs):
		user = request.user
		data = request.data.copy()
		print(data)
		bursar = get_bursar(user.email)
		invoice=get_invoice(data['invoice'])
		data['bookkeeper'] = bursar.pk
		data['invoice'] = invoice.pk
		serializer = PaymentCreateUpdateSerializer(data=data)
		serializer.is_valid(raise_exception=True)
		self.perform_create(serializer)
		headers = self.get_success_headers(serializer.data)
		return Response(
			serializer.data,
			headers=headers,
			status=status.HTTP_201_CREATED,
		)



class InvoiceLineViewSet(viewsets.ModelViewSet):
	authentication_classes = [TokenAuthentication, ]
	permission_classes = [permissions.IsAuthenticated,]
	lookup_field = 'id'

	def get_serializer_class(self):
		if self.action in ['list', 'retrieve']:
			return  InvoiceLineListSerializer
		return InvoiceLineCreateUpdateSerializer

	def get_queryset(self, *args, **kwargs):
		queryset = InvoiceLine.objects.select_related(
											'invoice'
										)
		invoice_id = self.request.query_params.get('id', None)
		if invoice_id is not None:
			invoice = get_invoice(invoice_id)
			if invoice != 'Invoice Does Not Exist':
				queryset = queryset.filter(
					invoice=invoice
				)
			else:
				queryset = []

		return queryset


class PaymentViewSet(viewsets.ModelViewSet):
	authentication_classes = [TokenAuthentication, ]
	permission_classes = [permissions.IsAuthenticated,]
	lookup_field = 'id'

	def get_serializer_class(self):
		if self.action in ['list', 'retrieve']:
			return  PaymentListDetailSerializer
		return PaymentCreateUpdateSerializer

	def get_queryset(self, *args, **kwargs):
		queryset = Payment.objects.select_related(
											'invoice'
										)
		invoice_id = self.request.query_params.get('id', None)
		if invoice_id is not None:
			invoice = get_invoice(invoice_id)
			if invoice != 'Invoice Does Not Exist':
				queryset = queryset.filter(
					invoice=invoice
				)
			else:
				queryset = []

		return queryset




class PaymentReport(views.APIView):
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = (TokenAuthentication,)

    def get(self, *args, **kwargs):
        students = []

        for student in Student.objects.all():

            student_report_data = {
                'id': student.id,
                'name': student.first_name,
				'surname': student.last_name,
				'unpaid_invoices': len([invoice for invoice in student.myinvoices.all() if invoice.status =='unpaid']),
				'partially_paid_invoices': len([invoice for invoice in student.myinvoices.all() if invoice.status =='partially']),
				'fully_paid_invoices': len([invoice for invoice in student.myinvoices.all() if invoice.status =='fully']),
				'total_due': student_total_due(student.myinvoices.all()),
            }
            students.append(student_report_data)

        return Response(students, status=status.HTTP_200_OK)
