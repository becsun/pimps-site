# Generated by Django 3.1.1 on 2020-09-11 11:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service', '0002_auto_20200911_0857'),
    ]

    operations = [
        migrations.AlterField(
            model_name='service',
            name='info',
            field=models.CharField(max_length=1000),
        ),
    ]