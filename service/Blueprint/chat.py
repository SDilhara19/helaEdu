from flask import Blueprint, request, jsonify
from utils import authenticate
from firebase_admin import firestore
from Models.Student import Student

chat = Blueprint("chat", __name__)


@chat.route("/", methods=["POST"])
@chat.route("", methods=["POST"])
# @authenticate
def index(user_data):

    email = "4589787546@email.com"
    result = Student.collection.get("st3f9505f5-e47b-4181-8201-2cebe7a127c2")

    request_payload = request.get_json(silent=True)
    prompt = request_payload["prompt"]

    response_payload = {
        "email": user_data["sub"],
        "received_params": request_payload,
        "fetched_from_db": result.to_dict(),
    }

    return jsonify(response_payload)
