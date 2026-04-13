from rest_framework import serializers

from .models import *


class PlayerSerializer(serializers.ModelSerializer):
    average_rating = serializers.SerializerMethodField()

    class Meta:
        model = Player
        fields = '__all__'

    def get_average_rating(self, obj):
        ratings = Rating.objects.all()
        if ratings.exists():
            return round(sum(r.score for r in ratings) / ratings.count(), 2)
        return 0


class CommentSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = Comment
        fields = '__all__'


class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = '__all__'
