# Generated by Django 3.1.1 on 2020-09-11 11:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0002_product_service'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='use',
            field=models.CharField(max_length=1000),
        ),
    ]