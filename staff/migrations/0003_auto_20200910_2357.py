# Generated by Django 3.1.1 on 2020-09-10 23:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('staff', '0002_auto_20200910_2256'),
    ]

    operations = [
        migrations.AddField(
            model_name='staff',
            name='favcut',
            field=models.CharField(max_length=30, null=True),
        ),
        migrations.AddField(
            model_name='staff',
            name='role',
            field=models.CharField(max_length=30, null=True),
        ),
    ]
