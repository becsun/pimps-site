# Generated by Django 3.1.1 on 2020-09-12 12:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service', '0004_auto_20200911_1122'),
    ]

    operations = [
        migrations.AlterField(
            model_name='service',
            name='name',
            field=models.CharField(max_length=1000, unique=True),
        ),
    ]
