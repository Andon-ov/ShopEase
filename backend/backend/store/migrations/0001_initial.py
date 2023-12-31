# Generated by Django 4.2.3 on 2023-07-27 15:31

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image_url', models.URLField()),
                ('name', models.CharField(max_length=200)),
                ('product_color', models.CharField(max_length=200)),
                ('short_description', models.TextField()),
                ('price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('discounted_price', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('ratings', models.PositiveIntegerField(default=0)),
                ('category', models.CharField(choices=[('LEATHER BAGS', 'Leather Bags'), ('BELTS', 'Belts'), ('WALLETS', 'Wallets'), ('LEATHER PRODUCTS', 'Leather Products')], max_length=50)),
            ],
        ),
    ]
