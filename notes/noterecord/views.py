from . models import notedata,todo
from . serializers import NoteSerializer,TodoSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def noteList(request):
    item=notedata.objects.all()
    serializer=NoteSerializer(item,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def noteDetail(request,pk):
    item=notedata.objects.get(pk=pk)
    serializer=NoteSerializer(item,many=False)
    return Response(serializer.data)

@api_view(['POST'])
def noteUpdate(request,pk):
    item=notedata.objects.get(pk=pk)
    serializer=NoteSerializer(instance=item,data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['DELETE'])
def noteDelete(request,pk):
    item=notedata.objects.get(pk=pk)
    item.delete()
    return Response("Item deleted")

@api_view(['GET'])
def todoList(request):
    item=todo.objects.all()
    serializer=TodoSerializer(item,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def todoDetail(request,pk):
    item=todo.objects.get(pk=pk)
    serializer=TodoSerializer(item,many=False)
    return Response(serializer.data)

@api_view(['PUT'])
def todoUpdate(request,pk):
    item=todo.objects.get(pk=pk)
    serializer=TodoSerializer(instance=item,data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['DELETE'])
def todoDelete(request,pk):
    item=todo.objects.get(pk=pk)
    item.delete()
    return Response("Your item is deleted")

    