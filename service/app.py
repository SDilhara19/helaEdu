from flask import Flask
from routes.chat import chat
from routes.status_codes import status_codes
from flask_cors import CORS

from firebase_admin import credentials
import firebase_admin


def create_app():
    cred = credentials.Certificate("config/credentials.json")
    firebase_admin.initialize_app(cred)

    app = Flask(__name__)
    CORS(app, resources={"/*": {"origins": "*"}})

    app.register_blueprint(chat, url_prefix="/chat")
    app.register_blueprint(status_codes, url_prefix="/status_code")

    return app


if __name__ == "__main__":
    app = create_app()
    app.run(debug=True, port=8081)
