from rest_framework.viewsets import ModelViewSet

from backend.store.models import Product
from backend.store.serializers import ProductSerializer


class ProductViewSet(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
