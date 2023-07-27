from django.urls import path

from backend.store.serializers import ProductListView


urlpatterns = [
    # Your other URL patterns
    path('products/', ProductListView.as_view(), name='product-list'),
]


