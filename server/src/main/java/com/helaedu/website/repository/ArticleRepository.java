
package com.helaedu.website.repository;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import com.helaedu.website.entity.Article;
import com.helaedu.website.entity.Article;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

@Repository
public class ArticleRepository {
    public List<Article> getAllArticles() throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        CollectionReference articlesCollection = dbFirestore.collection("articles");
        ApiFuture<QuerySnapshot> future = articlesCollection.get();
        List<Article> articles = new ArrayList<>();
        QuerySnapshot querySnapshot = future.get();
        for (DocumentSnapshot document : querySnapshot.getDocuments()) {
            Article article = document.toObject(Article.class);
            articles.add(article);
        }
        return articles;
    }
    //    public List<Article> getArticlesByStatus(String articleStatus) throws ExecutionException, InterruptedException {
//        Firestore dbFirestore = FirestoreClient.getFirestore();
//        CollectionReference articlesCollection = dbFirestore.collection("articles");
//        Query query = articlesCollection.whereEqualTo("articleStatus", articleStatus);
//        ApiFuture<QuerySnapshot> future = query.get();
//        List<Article> articles = new ArrayList<>();
//        QuerySnapshot querySnapshot = future.get();
//        for (DocumentSnapshot document : querySnapshot.getDocuments()) {
//            Article article = document.toObject(Article.class);
//            articles.add(article);
//        }
//        return articles;
//    }
    public Article getArticleById(String articleId) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentReference documentReference = dbFirestore.collection("articles").document(articleId);
        ApiFuture<DocumentSnapshot> future = documentReference.get();
        DocumentSnapshot document = future.get();
        Article article = null;
        if (document.exists()) {
            article = document.toObject(Article.class);
        }
        return article;
    }

    public Article getArticleByTeacherId(String teacherId) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentReference documentReference = dbFirestore.collection("articles").document(teacherId);
        ApiFuture<DocumentSnapshot> future = documentReference.get();
        DocumentSnapshot document = future.get();
        Article article = null;
        if (document.exists()) {
            article = document.toObject(Article.class);
        }
        return article;
    }

    public String deleteArticle(String articleId) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentReference documentReference = dbFirestore.collection("articles").document(articleId);
        ApiFuture<WriteResult> future = documentReference.delete();
        return future.get().getUpdateTime().toString();
    }
    public String updateArticle(String articleId, Article article) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentReference documentReference = dbFirestore.collection("articles").document(articleId);
        ApiFuture<WriteResult> future = documentReference.set(article);
        return future.get().getUpdateTime().toString();
    }

}
