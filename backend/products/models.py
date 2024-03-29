from django.db import models
from django.contrib.auth.models import User

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
    image = models.CharField(max_length=255, null= True, blank= True)
    rating = models.DecimalField(max_digits=3, decimal_places=2, null=True, blank=True)
    featured = models.BooleanField(default=False)    

    # Reviews: a TextField or ForeignKey to a Review model that stores user reviews of the product.
    # Variants: a ManyToManyField to a Variant model that stores different variants of the product (such as size or color).
    # Featured: a BooleanField to indicate whether the product is a featured item or not.



class Cart(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    products = models.ManyToManyField(Product, blank=True)
    total = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)

    def __str__(self):
        return f"Cart for {self.user}"
