from django.http import JsonResponse

def getRoutes(request):
    routes = [
        # This endpoint is where we submit the username and password and we get back an access token
        '/api/token',
        # This will give us a new token based on a refresh token that you sent to the backend 
        '/api/token/refresh'
    ]
    return JsonResponse(routes, safe= False)
