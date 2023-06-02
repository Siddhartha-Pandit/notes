from django.contrib import admin
from django.urls import path,include
from . import  views

urlpatterns = [
    # path('admin/', admin.site.urls),
    # path('',index,name='index'),
    path('note/',views.noteList,name='note-list'),
    path('note/<int:pk>',views.noteDetail,name='note-detail'),
    path('note/update/<int:pk>',views.noteUpdate,name='note-update'),
    path('note/delete/<int:pk>',views.noteDelete,name='note-delete'),
    path('todo/',views.todoList,name='todo-list'),
    path('todo/<int:pk>',views.todoDetail,name='todo-detail'),
    path('todo/update/<int:pk>',views.todoUpdate,name='todo-update'),
    path('todo/delete/<int:pk>',views.todoDelete,name='todo-delete'),
    

]
