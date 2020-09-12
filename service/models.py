from django.db import models

class Service(models.Model):
    name = models.CharField(max_length=1000, unique=True)
    info = models.CharField(max_length=1000)
    price = models.IntegerField()
    staff = models.ManyToManyField(
        'staff.Staff',
        related_name='services',
        blank = True
    )
    product = models.ManyToManyField(
        'product.Product',
        related_name='services',
        blank = True
    )
    def __str__(self):
        return f'{self.name}'
