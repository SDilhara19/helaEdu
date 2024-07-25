from flask import Blueprint, request, jsonify
from utils import authenticate
from firebase_admin import firestore
from Models.Student import Student
from Chatbot.main import student_chat_response

chat = Blueprint("chat", __name__)


@chat.route("/", methods=["POST"])
@chat.route("", methods=["POST"])
# @authenticate
def index():
    # def index(user_data):
    # result = Student.collection.get("st3f9505f5-e47b-4181-8201-2cebe7a127c2")

    request_payload = request.get_json(silent=True)
    prompt = request_payload["prompt"]
    grade = request_payload["grade"]
    subject = request_payload["subject"]
    student_id = request_payload["student_id"]
    chat_session_id = request_payload["chat_session_id"]
    chatbot_response = student_chat_response(
        prompt, grade, subject, student_id, chat_session_id
    )
    response_payload = {
        # "email": user_data["sub"],
        "response": chatbot_response,
    }

    return jsonify(response_payload)
