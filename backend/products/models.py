from django.db import models
from django.core.validators import MinValueValidator
from django.db.models.aggregates import IntegerField
from django.db.models.expressions import Decimal

# Create your models here.

class Product(models.Model):
    CATEGORY_CHOICES = [
        ('electronics', 'Electronics'),
        ('fashion', 'Fashion'),
        ('home_and_garden', 'Home and Garden'),
        ('beauty_and_personal_care', 'Beauty and Personal Care'),
        ('sports_and_outdoors', 'Sports and Outdoors'),
        ('health_and_wellness', 'Health and Wellness'),
        ('toys_and_games', 'Toys and Games'),
        ('pet_supplies', 'Pet Supplies'),
        ('books_and_media', 'Books and Media'),
        ('food_and_beverage', 'Food and Beverage'),
    ]
    name = models.CharField(max_length=255, null= True)
    description = models.TextField(null= True)
    price = models.DecimalField(max_digits=10, decimal_places=2, null=True)
    category = models.CharField(choices=CATEGORY_CHOICES, max_length=25, null= True)
    sku = models.CharField(max_length=50, null= True)
    quantity = models.PositiveIntegerField(null= True)
    image = models.ImageField(upload_to='products/', null=True, blank=True)
    rating = models.DecimalField(max_digits=3, decimal_places=2, null=True, blank=True)
    featured = models.BooleanField(default=False)    

    # Reviews: a TextField or ForeignKey to a Review model that stores user reviews of the product.
    # Variants: a ManyToManyField to a Variant model that stores different variants of the product (such as size or color).
    # Featured: a BooleanField to indicate whether the product is a featured item or not.
