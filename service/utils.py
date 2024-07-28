from flask import request, redirect
import jwt


key_file = open("./config/public_key.pem")
SECRET_KEY = key_file.read()
key_file.close()


def authenticate(func, *args, **kwargs):
    def wrapper(*args, **kwargs):
        # try:
        if "Authorization" in request.headers:
            auth_header = request.headers["Authorization"]
            token = auth_header.split(" ")[-1]
            data = jwt.decode(token, key=SECRET_KEY, algorithms=["RS256"])
            user_data = data
            return func(user_data, *args, **kwargs)
        else:
            return redirect("/403", code=403)
        # except Exception as e:
        # print(e)
        # return redirect("/500", code=500)

    wrapper.__name__ = func.__name__
    return wrapper
