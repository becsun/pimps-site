from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Service
from .serializers import ServiceSerializer

class ServiceListView(APIView):

    def get(self, _request):
        services = Service.objects.all()
        serialized_services = ServiceSerializer(services, many=True)
        return Response(serialized_services.data, status=status.HTTP_200_OK)

class ServiceDetailView(APIView):

    def get(self, _request, pk):
        service = Service.objects.get(pk=pk)
        serialized_service = ServiceSerializer(service)
        return Response(serialized_service.data, status=status.HTTP_200_OK)
