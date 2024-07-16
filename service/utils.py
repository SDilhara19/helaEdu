from flask import request, redirect
import jwt

SECRET_KEY = "eW91cl9nZW5lcmF0ZWRfc2VjcmV0X2tleV9zaG91bGRfYmVfMzJfYnl0ZXNfbG9uZw=="


def authenticate(func, *args, **kwargs):
    def wrapper(*args, **kwargs):
        # try:
        if "Authorization" in request.headers:
            auth_header = request.headers["Authorization"]
            token = auth_header.split(" ")[-1]
            data = jwt.decode(
                token,
                key=SECRET_KEY,
                algorithms=[
                    "HS256",
                ],
            )
            user_data = data
            return func(user_data, *args, **kwargs)
        else:
            return redirect("/403", code=403)
        # except Exception as e:
        # print(e)
        # return redirect("/500", code=500)

    return wrapper
