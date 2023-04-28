from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include("base.api.urls")),
    path('product_api/', include("products.api.urls"))

]
