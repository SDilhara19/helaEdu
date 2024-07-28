from flask import Flask
from Blueprint.chat import chat
from Blueprint.status_codes import status_codes
from flask_cors import CORS


import fireo


def create_app():
    app = Flask(__name__)
    CORS(app, resources={"/*": {"origins": "*"}})
    fireo.connection(from_file="config/credentials.json")

    app.register_blueprint(chat, url_prefix="/chat")
    app.register_blueprint(status_codes, url_prefix="/status_code")

    return app


if __name__ == "__main__":
    app = create_app()
    app.run(debug=True, port=8081)
