from fireo.models import Model
from fireo.fields import TextField


class Student(Model):

    email = TextField()
    firstName = TextField()
    lastName = TextField()
    noteId = TextField()
    password = TextField()
    regTimestamp = TextField()
    role = TextField()
    subscriptionId = TextField()
    userId = TextField()

    class Meta:
        collection_name = "students"
