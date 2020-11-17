from django.conf import settings
from django.db import models


class Product(models.Model):
    "Generated Model"
    name = models.CharField(
        max_length=40,
    )
    price = models.FloatField()
    creation_date = models.DateField(
        auto_now_add=True,
    )
    quantity = models.IntegerField()


# Create your models here.
