from fireo.models import Model
from fireo.fields import TextField


class Article(Model):

    articleId = TextField()
    status = TextField()

    def approve(self):
        self.status = "APPROVED"

    class Meta:
        collection_name = "articles"
