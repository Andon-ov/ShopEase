from django.db import models


class Category(models.Model):
    NAME_MAX_LEN = 100

    name = models.CharField(
        max_length=NAME_MAX_LEN
    )
    description = models.TextField()

    class Meta:
        verbose_name_plural = 'Categories'

    def __str__(self):
        return self.name


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
    )

    category = models.ForeignKey(
        Category,
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return self.name
