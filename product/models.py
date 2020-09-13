from django.db import models



class Product(models.Model):
    name = models.CharField(max_length=30, unique=True)
    brand = models.CharField(max_length=30)
    image = models.CharField(max_length=1000)
    use = models.CharField(max_length=1000)
    hairtype = models.CharField(max_length=30)
    service = models.ManyToManyField(
        'service.Service',
        related_name='products',
        blank = True
    )

    def __str__(self):
        return f'{self.name}'
