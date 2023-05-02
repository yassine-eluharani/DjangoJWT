from django.urls import path
from . import views

urlpatterns =[
    path('', views.getRoutes),
    path('products', views.getProducts),
    path('create', views.addProduct),
    path('product/<int:product_id>', views.getProduct),
    path('addCart/', views.addCart)
]
