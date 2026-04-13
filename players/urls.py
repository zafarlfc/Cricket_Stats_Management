from rest_framework.routers import DefaultRouter

from .views import PlayerViewSet, CommentViewSet, RatingViewSet

router = DefaultRouter()
router.register('players', PlayerViewSet)
router.register('comments', CommentViewSet)
router.register('ratings', RatingViewSet)

urlpatterns = router.urls
