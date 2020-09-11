from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Staff
from .serializers import StaffSerializer

class StaffListView(APIView):

    def get(self, _request):
        staffs = Staff.objects.all()
        serialized_staffs = StaffSerializer(staffs, many=True)
        return Response(serialized_staffs.data, status=status.HTTP_200_OK)

class StaffDetailView(APIView):

    def get(self, _request, pk):
        staff = Staff.objects.get(pk=pk)
        serialized_staff = StaffSerializer(staff)
        return Response(serialized_staff.data, status=status.HTTP_200_OK)
