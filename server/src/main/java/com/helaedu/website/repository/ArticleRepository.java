package com.helaedu.website.repository;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import com.helaedu.website.entity.Article;
import org.springframework.stereotype.Repository;

import java.util.*;
import java.util.concurrent.ExecutionException;

@Repository
public class ArticleRepository {

//    create an article
    public String createArticle(Article article) {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentReference documentReference  = dbFirestore.collection("articles").document(article.getArticleId());
        documentReference .set(article);
        return article.getArticleId();
    }
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

//    get list of teachers who add more than 10 articles
    public int countArticlesByTeacherId(String teacherId) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        CollectionReference articlesCollection = dbFirestore.collection("articles");
        Query query = articlesCollection.whereEqualTo("teacherId", teacherId);
        ApiFuture<QuerySnapshot> future = query.get();
        return future.get().size();
    }

    public List<String> getTeachersWithArticleCountGreaterThan(int count) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        CollectionReference articlesCollection = dbFirestore.collection("articles");
        ApiFuture<QuerySnapshot> future = articlesCollection.get();
        List<QueryDocumentSnapshot> documents = future.get().getDocuments();

        Map<String, Integer> teacherArticleCounts = new HashMap<>();
        for (DocumentSnapshot document : documents) {
            String teacherId = document.getString("teacherId");
            teacherArticleCounts.put(teacherId, teacherArticleCounts.getOrDefault(teacherId, 0) + 1);
        }

        List<String> qualifiedTeachers = new ArrayList<>();
        for (Map.Entry<String, Integer> entry : teacherArticleCounts.entrySet()) {
            if (entry.getValue() >= count) {
                qualifiedTeachers.add(entry.getKey());
            }
        }
        return qualifiedTeachers;
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
    public List<Article> getArticlesByStatus(String status) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        CollectionReference articlesCollection = dbFirestore.collection("articles");
        Query query = articlesCollection.whereEqualTo("articleStatus", status);
        ApiFuture<QuerySnapshot> future = query.get();
        List<Article> articles = new ArrayList<>();
        QuerySnapshot querySnapshot = future.get();
        for (DocumentSnapshot document : querySnapshot.getDocuments()) {
            Article article = document.toObject(Article.class);
            articles.add(article);
        }
        return articles;
    }
    //    approve relevant articles as approved
    public String updateArticleStatus(String articleId, String newStatus) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentReference documentReference = dbFirestore.collection("articles").document(articleId);
        ApiFuture<WriteResult> future = documentReference.update("articleStatus", newStatus);
        return future.get().getUpdateTime().toString();
    }
}
