from rest_framework.response import Response
from rest_framework.decorators import api_view
from products.models import Product
from products.api.serializers import ProductSerializer

#This decerator takes a list of http methods we ca send 
@api_view(['GET'])
def getRoutes(request):
    routes = [
        # This endpoint is where we submit the username and password and we get back an access token
        '/product_api/products',
        # This will give us a new token based on a refresh token that you sent to the backend 
        '/product_api/create'
    ]
    return Response(routes)


@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serialzer = ProductSerializer(products, many= True)
    print('DEBUG print getProducts is called serialzer ----',serialzer)
    return Response(serialzer.data)

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
