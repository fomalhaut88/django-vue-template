from django.db import models


class Note(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    text = models.TextField(default="")

    def __str__(self):
        return self.text
