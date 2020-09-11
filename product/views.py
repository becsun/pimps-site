from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Product
from .serializers import ProductSerializer

class ProductListView(APIView):

    def get(self, _request):
        products = Product.objects.all()
        serialized_products = ProductSerializer(products, many=True)
        return Response(serialized_products.data, status=status.HTTP_200_OK)

class ProductDetailView(APIView):

    def get(self, _request, pk):
        product = Product.objects.get(pk=pk)
        serialized_product = ProductSerializer(product)
        return Response(serialized_product.data, status=status.HTTP_200_OK)



