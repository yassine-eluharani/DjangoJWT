from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view


#This decerator takes a list of http methods we ca send 
@api_view(['GET'])
def getRoutes(request):
    routes = [
        # This endpoint is where we submit the username and password and we get back an access token
        '/api/token',
        # This will give us a new token based on a refresh token that you sent to the backend 
        '/api/token/refresh'
    ]
    return Response(routes)
