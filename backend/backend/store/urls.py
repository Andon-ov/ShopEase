from django.urls import path

from backend.store.serializers import ProductListView, CategoryListAPIView


urlpatterns = [
    path('products/', ProductListView.as_view(), name='product-list'),
    path('categories/', CategoryListAPIView.as_view(), name='category-list'),

]


