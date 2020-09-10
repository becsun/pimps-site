from django.db import models

class Service(models.Model):
    name = models.CharField(max_length=30, unique=True)
    info = models.CharField(max_length=200)
    price = models.IntegerField()
    # staff = models.ManyToMany(
    #     'staff.Staff', 'product.Product
    #     related_name='services'
    # )
    def __str__(self):
        return f'{self.name}'
