from rest_framework import generics
from .models import notedata
from .serializers import PostSerializer

class PostList(generics.ListCreateAPIView):
    queryset=notedata.objects.all()
    serializer_class=PostSerializer
    pass


