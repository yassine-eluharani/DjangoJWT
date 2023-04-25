from django.db import models

# Create your models here.

class Product(models.Model):
    ProductName = models.CharField(max_length=30)
    # Product name: a CharField to store the name of the product.
    # Description: a TextField to store the description of the product.
    # Price: a DecimalField to store the price of the product.
    # Category: a ForeignKey to a Category model that groups similar products together.
    # Brand: a ForeignKey to a Brand model that represents the brand of the product.
    # SKU: a CharField to store a unique identifier for the product.
    # Quantity: an IntegerField to store the available quantity of the product.
    # Weight: a FloatField to store the weight of the product, useful for calculating shipping costs.
    # Images: an ImageField or FileField to store product images or other media files.
    # Ratings: a FloatField or IntegerField to store the product rating or number of ratings.
    # Reviews: a TextField or ForeignKey to a Review model that stores user reviews of the product.
    # Variants: a ManyToManyField to a Variant model that stores different variants of the product (such as size or color).
    # Tags: a ManyToManyField to a Tag model that allows you to tag products with keywords or attributes for filtering and searching.
    # Date added: a DateTimeField to store the date and time the product was added to the store.
    # Featured: a BooleanField to indicate whether the product is a featured item or not.
