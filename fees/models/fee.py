from django.db import models



class Fee(models.Model):


    FEES_TARGETS_CHOICES = [
        ('individual', 'INDIVIDUAL'),
        ('all', 'ALL STUDENTS'),
        ('eights', 'GRADE 8'),
        ('nines', 'GRADE 9'),
        ('tens', 'GRADE 10'),
        ('elvens', 'GRADE 11'),
        ('twelves', 'GRADE 12'),
        ('other', 'OTHER'),

    ]


    FEES_TYPE_CHOICES = [
        ('once', 'ONCE-OFF'),
        ('often', 'OFTEN'),
    ]




    name = models.CharField(max_length=300)
    targets = models.CharField(max_length=200, choices=FEES_TARGETS_CHOICES)
    type = models.CharField(max_length=200, choices=FEES_TYPE_CHOICES)
    amount = models.DecimalField(max_digits=16, blank=True, decimal_places=2, default=0.0)

    def __str__(self):
        return f'{self.name} {self.amount}'
