# Generated by Django 3.1.1 on 2020-09-11 08:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service', '0002_auto_20200911_0857'),
        ('staff', '0003_auto_20200910_2357'),
    ]

    operations = [
        migrations.AddField(
            model_name='staff',
            name='service',
            field=models.ManyToManyField(related_name='staffs', to='service.Service'),
        ),
    ]