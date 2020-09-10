from django.db import models

class Staff(models.Model):
    name = models.CharField(max_length=30, unique=True)
    bio = models.CharField(max_length=200)
    image = models.CharField(max_length=30)
    fav_cut = models.CharField(max_length=30)
    # services = models.ManyToMany(
    #     'services.Service',
    #     related_name='staffs'
    # )
    def __str__(self):
        return f'{self.name}'
