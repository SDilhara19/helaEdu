from flask import Blueprint, request, jsonify
from utils import authenticate
from firebase_admin import firestore

chat = Blueprint("chat", __name__)


@chat.route("/", methods=["POST"])
@chat.route("", methods=["POST"])
@authenticate
def index(user_data):
    db = firestore.client()
    doc_ref = db.collection("students").document(
        "st810e88c5-a48a-4ba4-a813-a31db2571bea"  # this is a real stu key
    )
    doc = doc_ref.get()

    request_payload = request.get_json(silent=True)
    response_payload = {
        "email": user_data["sub"],
        "received params": request_payload,
        "fetched_from_db": doc.to_dict(),
    }

    return jsonify(response_payload)
