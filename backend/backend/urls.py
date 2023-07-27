
from django.urls import path, include
from django.contrib import admin
from rest_framework.routers import DefaultRouter

from backend.store.views import ProductViewSet

router = DefaultRouter()
router.register(r'products', ProductViewSet, basename='product')

urlpatterns = [
    path("admin/", admin.site.urls),
    path('', include(router.urls)),
]

