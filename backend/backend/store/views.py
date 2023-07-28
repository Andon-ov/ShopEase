from rest_framework.generics import ListAPIView
from rest_framework.viewsets import ModelViewSet

from backend.store.models import Product, Category
from backend.store.serializers import ProductSerializer, CategorySerializer


class ProductViewSet(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class CategoryListAPIView(ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
