from rest_framework import serializers
from .models import notedata,todo

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model=notedata
        fields=('id','title','detail')

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model=todo
        fields='__all__'
        