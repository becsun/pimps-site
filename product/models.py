from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=30, unique=True)
    brand = models.CharField(max_length=30)
    image = models.CharField(max_length=30)
    use = models.CharField(max_length=200)
    hairtype = models.CharField(max_length=30)
    # services = models.ManyToMany(
    #     'services.Service',
    #     related_name='products'
    # )
    def __str__(self):
        return f'{self.name}'
