

from django.urls import path

from backend.store.views import CategoryListView, CategoryRetrieveView, ProductListView, ProductRetrieveView

urlpatterns = [
    path('categories/', CategoryListView.as_view(), name='category-list'),
    path('categories/<int:pk>/', CategoryRetrieveView.as_view(),
         name='category-retrieve'),
    path('products/', ProductListView.as_view(), name='product-list'),
    path('products/<int:pk>/', ProductRetrieveView.as_view(),
         name='product-retrieve'),
]
