from flask import Blueprint, request, jsonify
from utils import authenticate
from firebase_admin import firestore
from Models.Articles import Article


articles = Blueprint("articles", __name__)


@articles.route("/<article_id>/approve", methods=["GET"])
@articles.route("/<article_id>/approve/", methods=["GET"])
def approve_article(article_id):
    article = Article.collection.get(article_id)
    article.approve()
    article.update()
    return {}

