from django.contrib import admin
from products.models import Cart, Product

# Register your models here.
admin.site.register(Product)
admin.site.register(Cart)
