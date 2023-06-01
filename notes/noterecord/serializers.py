from rest_framework import serializers
from .models import notedata

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model=notedata
        fields=('id','title','detail')