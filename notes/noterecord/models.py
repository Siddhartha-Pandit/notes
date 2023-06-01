from django.db import models

class notedata(models.Model):
    id=models.AutoField
    title=models.CharField(max_length=100)
    detail=models.CharField(max_length=500)

class todo(models.Model):
    id=models.AutoField
    todolist=models.CharField(max_length=256)
    time=models.DateTimeField()
    status=models.BooleanField()



