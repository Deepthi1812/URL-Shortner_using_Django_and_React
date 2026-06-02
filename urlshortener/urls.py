from django.urls import path, re_path
from . import views
from .views_auth import SignupView, LoginView
from .views import home, api_health_check, ShortenURLAPIView, redirect_to_original, analytics_view

urlpatterns = [
    path('api/signup/', SignupView.as_view(), name='signup'),
    path('api/login/', LoginView.as_view(), name='login'),
    path('', home, name='home'),
    path('api/health/', api_health_check, name='api-health-check'),
    path('api/shorten/', ShortenURLAPIView.as_view(), name='shorten-url'),
    path('api/analytics/<str:short_code>/', analytics_view, name='analytics'),
    re_path(r'^(?P<short_code>[a-zA-Z0-9]+)/$', redirect_to_original, name='redirect-to-original'),
]

