from rest_framework.routers import DefaultRouter
from .apis import (
		
		
		InvoiceViewSet,
		InvoiceLineViewSet,
		PaymentViewSet,
		FeeViewSet

		

	)


router = DefaultRouter()

router.register(r'payments', PaymentViewSet, basename='payments')
router.register(r'invoice-lines', InvoiceLineViewSet, basename='invoice-lines')
router.register(r'fees', FeeViewSet, basename='fees')
router.register(r'invoices', InvoiceViewSet, basename='invoices')


urlpatterns = router.urls


