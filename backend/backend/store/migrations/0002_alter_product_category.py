# Generated by Django 4.2.3 on 2023-07-28 13:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='category',
            field=models.CharField(blank=True, choices=[('LEATHER BAGS', 'Leather Bags'), ('BELTS', 'Belts'), ('WALLETS', 'Wallets'), ('LEATHER PRODUCTS', 'Leather Products')], max_length=50, null=True),
        ),
    ]