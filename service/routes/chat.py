from flask import Blueprint, request, jsonify
from utils import authenticate
from firebase_admin import firestore
from Models.Student import Student
from Chatbot.main import get_response2

chat = Blueprint("chat", __name__)


@chat.route("/", methods=["POST"])
@chat.route("", methods=["POST"])
# @authenticate
def index():
# def index(user_data):
    # result = Student.collection.get("st3f9505f5-e47b-4181-8201-2cebe7a127c2")

    request_payload = request.get_json(silent=True)
    prompt = request_payload["prompt"]
    chatbot_response=get_response2(prompt)
    response_payload = {
        # "email": user_data["sub"],
        "response": chatbot_response,
    }

    return jsonify(response_payload)
