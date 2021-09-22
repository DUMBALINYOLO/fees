from rest_framework.routers import DefaultRouter
from django.urls import path
from .apis import (
		InvoiceViewSet,
		InvoiceLineViewSet,
		PaymentViewSet,
		FeeViewSet,
		PaymentReport,

	)


router = DefaultRouter()

router.register(r'payments', PaymentViewSet, basename='payments')
router.register(r'invoice-lines', InvoiceLineViewSet, basename='invoice-lines')
router.register(r'fees', FeeViewSet, basename='fees')
router.register(r'invoices', InvoiceViewSet, basename='invoices')


urlpatterns = [
	path('payment-reports/', PaymentReport.as_view()),
] + router.urls
