from django.db import models

CATEGORY_CHOICES = (
    ('LEATHER BAGS', 'Leather Bags'),
    ('BELTS', 'Belts'),
    ('WALLETS', 'Wallets'),
    ('LEATHER PRODUCTS', 'Leather Products'),
)


class Product(models.Model):
    NAME_MAX_LEN = 200
    COLOR_MAX_LEN = 200
    CATEGORY_MAX_LEN = 50
    MAX_DIGITS = 10
    DECIMAL_PLACES = 2

    image_url = models.URLField()

    name = models.CharField(
        max_length=NAME_MAX_LEN
    )

    product_color = models.CharField(
        max_length=COLOR_MAX_LEN
    )

    short_description = models.TextField()
    price = models.DecimalField(
        max_digits=MAX_DIGITS,
        decimal_places=DECIMAL_PLACES
    )

    discounted_price = models.DecimalField(
        max_digits=MAX_DIGITS,
        decimal_places=DECIMAL_PLACES,
        null=True,
        blank=True
    )

    ratings = models.PositiveIntegerField(
        default=0,
        # help_text="Ratings stars"
    )

    category = models.CharField(
        max_length=CATEGORY_MAX_LEN,
        choices=CATEGORY_CHOICES
    )

    def __str__(self):
        return self.name
