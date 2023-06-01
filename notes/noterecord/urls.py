from django.contrib import admin
from django.urls import path,include
from .views import PostList

urlpatterns = [
    # path('admin/', admin.site.urls),
    # path('',index,name='index'),
    path('api/',PostList.as_view(),name="create")
]
