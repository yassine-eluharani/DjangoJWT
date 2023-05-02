from django.db.models.sql.query import product
from rest_framework.response import Response
from rest_framework.decorators import api_view
from products.models import Product, Cart
from products.api.serializers import CartSerializer, ProductSerializer

#This decerator takes a list of http methods we ca send 
@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/product_api/products',
        '/product_api/create',
        '/product_api/product/<int>',
        '/product_api/addCart',
        '/product_api/getCart'
        
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


@api_view(['POST'])
def addCart(request):
    user = request.user.id
    product_id = request.data.get("id")
    quantity = request.data.get("quantity")
    product = Product.objects.get(id = product_id)
    cart, created = Cart.objects.get_or_create(user=user)
    cart.products.add(product)
    cart.total +=quantity* product.price
    cart.save()
    return Response({'message': f'{product.name} added to cart.'})


@api_view(['GET'])
def getCart(request):
    user = request.user
    cart = Cart.objects.filter(user=user).first()
    if not cart:
        return Response({'products': []})
    cart_products = cart.products.all()
    serializer = ProductSerializer(cart_products, many=True)
    return Response({'products': serializer.data})


