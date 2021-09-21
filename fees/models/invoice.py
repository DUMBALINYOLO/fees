import uuid
import datetime
import itertools
from decimal import Decimal as D
from functools import reduce
from django.db import models
from django.db.models import Q
from django.utils import timezone






class Invoice(models.Model):
    '''
    An invoice is a document that represents a sale. Because of the complexity of the object,
    both a quotation and an invoice are represented by the same model. The document starts as a
    quotation and then can move to a proforma invoice culminating in the creation of an invoice.
    In each stage the document can be considered a draft in which case no journal entries are made
    and no fiscalization takes place. Only non draft invoices can be sent

    After the invoice has been fully_paid a journal entry is generated, it is converted into a sale
    Invoices can be voided and trying to figure out how to create an entry upon voiding,
    That includes incrementing the stock and returning the client money



    methods
    -------
    add_line
    set_quote_invoice_number
    _line_total -
    _line_getter - gets all the invoice lines of a certain type




    properties
    --------
    overdue - bool
    overdue_days - int
    total - decimal
    is_quotation - bool
    is_credit -bool
    total_paid - decimal
    total_due - the remainder fo payments
    tax_amount - decimal
    subtotal -decimal
    sales_lines
    sales_total
    service_lines
    service_total
    expense_lines
    expense_total
    total_shipping_costs
    percentage_shipping_cost
    returned_total
    sales_only
    service_only
    expense_only



    '''


    tracking_number = models.CharField(max_length=255, null=True, default=None)
    validated_by = models.ForeignKey(
                        'users.User',
                        blank=True,
                        null=True,
                        on_delete=models.SET_NULL
                    )
    student = models.ForeignKey(
            "users.Student",
            on_delete=models.SET_NULL,
            null=True,
            related_name ='myinvoices'
    )
    bookkeeper = models.ForeignKey(
            'users.Bursar',
            on_delete=models.SET_NULL,
            null=True,
            related_name='invoices',
        )
    due= models.DateField( default=datetime.date.today)
    date= models.DateField(default=datetime.date.today)
    terms = models.CharField(
                max_length = 128,
                blank=True
                )
    comments = models.TextField(blank=True)
    is_voided = models.BooleanField(blank=True,default=False)



    def save(self, *args, **kwargs):
        if not self.tracking_number:
            self.tracking_number = str(uuid.uuid4()).replace("-", '').upper()[:13]
        super(Invoice, self).save(*args, **kwargs)



    @property
    def overdue(self):
        '''returns boolean only if it is a valid invoice'''
        if self.status in ['invoice', 'paid-partially'] and not self.draft:
            return self.overdue_days > 0
        return False

    @property
    def overdue_days(self):
        '''returns days due'''
        TODAY = timezone.now().date()
        if TODAY > self.due:
            return (TODAY - self.due).days
        return 0


    @property
    def total(self):
        '''the total value of the invoice inclusive of tax'''
        return self.subtotal + self.tax_amount


    @property
    def on_credit(self):
        '''Checks if the invoice is on credit returns bool'''
        return self.status in ['invoice', 'paid-partially'] and not self.draft \
            and self.due > self.date

    @property
    def total_paid(self):
        '''Returns the total value of payments made towards the invoice'''
        return sum([p.amount for p in self.invoicepayments.all()])


    @property
    def total_due(self):
        '''The remaining balance left to be paid on an invoice'''
        return self.total - self.total_paid - self.total_credited



    @property
    def subtotal(self):
        '''The total of the invoice minus tax including discounts'''

        return sum([i.subtotal for i in self.lines.all()])



    def __str__(self):
        return 'INV' + str(self.pk)



    @property
    def invoice_total(self):
        '''Returns numeric total of product sales'''
        return sum([line.subtotal for line in self.lines.all()], D(0))



    @property
    def lines(self):
        return self.lines.prefetch_related(
                                    'fee',
                                )




class InvoiceLine(models.Model):

    invoice = models.ForeignKey(
                            'fees.Invoice',
                            on_delete=models.SET_NULL,
                            null=True,
                            default=1,
                            related_name= 'lines'

                        )
    fee = models.ForeignKey(
                        'fees.Fee',
                        on_delete=models.PROTECT,
                    )
    value = models.DecimalField(max_digits=16, decimal_places=2, default=0.0)
    quantity= models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    discount =models.DecimalField(max_digits=16, decimal_places=2, default=0.0)
    reference_number = models.CharField(max_length=255, null=True, default=None)


    def save(self, *args, **kwargs):
        if not self.reference_number:
            self.reference_number = str(uuid.uuid4()).replace("-", '').upper()[:13]
        if self.value == 0.0:
            self.set_value()
        super(InvoiceLine, self).save(*args, **kwargs)


    #what it is sold for



    def set_value(self):
        self.value = self.fee.amount * D(self.quantity)
        return self.value


    @property
    def nominal_price(self):
        '''The price of the line without discount and taxes'''
        return self.quantity * self.fee.amount


    def __str__(self):
        return f'{self.reference_number} {self.invoice.customer}'



    @property
    def subtotal(self):
        '''Returns the value of the line after the discount and before taxes'''
        return self.nominal_price - self.discount_total

    @property
    def total(self):
        '''Includes price after discount and tax'''
        if not self.component:
            return 0

        return self.subtotal

    @property
    def discount_total(self):
        if self.discount == None:
            return D(0)
        '''Returns the value subtracted from the nominal price due to a discount'''
        return D(self.nominal_price) * D(self.discount)
