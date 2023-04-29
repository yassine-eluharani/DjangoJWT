from rest_framework.response import Response
from rest_framework.decorators import api_view
from products.models import Product
from products.api.serializers import ProductSerializer

#This decerator takes a list of http methods we ca send 
@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/product_api/products',
        '/product_api/create',
        '/product_api/product/<int>'
    ]
    return Response(routes)


@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serialzer = ProductSerializer(products, many= True)
    return Response(serialzer.data)


@api_view(['GET'])
def getProduct(request, product_id):
    product_details = Product.objects.get(id = product_id)
    serializer = ProductSerializer(product_details)
    return Response(serializer.data)

@api_view(['POST'])
def addProduct(request):
    data =  {
        "name": request.data.get("name"), 
        "description": request.data.get("description"),
        "price": request.data.get("price"),
        "category": request.data.get("category"),
        "sku": request.data.get("sku"),
        "quantity": request.data.get("quantity"),
        "image": request.data.get("image"),
        "rating": request.data.get("rating"),
        "featured": request.data.get("featured"),
    }
    serialzer = ProductSerializer(data = data)
    if serialzer.is_valid():
        serialzer.save()
        return Response(serialzer.data)
    return Response(serialzer.errors)
