from django.db import models

class Staff(models.Model):
    name = models.CharField(max_length=30, unique=True)
    role = models.CharField(max_length=30, null=True)
    bio = models.CharField(max_length=1000)
    image = models.CharField(max_length=30)
    favcut = models.CharField(max_length=30, null=True)
    service = models.ManyToManyField(
        'service.Service',
        related_name='staffs',
        blank = True
    )

    def __str__(self):
        return f'{self.name}'
