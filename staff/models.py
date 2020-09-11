from django.db import models

class Staff(models.Model):
    name = models.CharField(max_length=30, unique=True)
    role = models.CharField(max_length=30, null=True)
    bio = models.CharField(max_length=200)
    image = models.CharField(max_length=30)
    favcut = models.CharField(max_length=30, null=True)
    # services = models.ManyToMany(
    #     'services.Service',
    #     related_name='staffs'
    # )
    def __str__(self):
        return f'{self.name}'
