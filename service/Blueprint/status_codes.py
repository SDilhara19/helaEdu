from flask import Blueprint, request, jsonify

status_codes = Blueprint("status_codes", __name__)


@status_codes.route("/403")
def forbidden():
    return (jsonify({"error": "Forbidden"}), 403)


@status_codes.route("/500")
def internal_error():
    return (jsonify({"error": "Internal server error"}), 500)
