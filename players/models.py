from django.contrib.auth.models import User
from django.db import models


# Create your models here.


class Player(models.Model):
    ROLE_CHOICES = (
        ('batsman', 'Batsman'),
        ('bowler', 'Bowler'),
        ('allrounder', 'All-Rounder'),
        ('wicketkeeper', 'Wicket Keeper'),
    )

    name = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES)

    matches = models.IntegerField(default=0)
    runs = models.IntegerField(default=0)
    wickets = models.IntegerField(default=0)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    player = models.ForeignKey(Player, on_delete=models.CASCADE, related_name='comments')
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user} - {self.player}"


class Rating(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    player = models.ForeignKey(Player, on_delete=models.CASCADE, related_name='ratings')
    score = models.IntegerField()  # 1–5

    class Meta:
        unique_together = ('user', 'player')  # one rating per user

    def __str__(self):
        return f"{self.user} rated {self.player}: {self.score}"
