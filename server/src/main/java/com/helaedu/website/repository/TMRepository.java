package com.helaedu.website.repository;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.firebase.cloud.FirestoreClient;
import com.helaedu.website.entity.Teacher;
import org.springframework.stereotype.Repository;

import java.util.concurrent.ExecutionException;

@Repository
public class TMRepository {
    public Teacher getTMById(String userId) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentReference documentReference = dbFirestore.collection("teachers").document(userId);
        ApiFuture<DocumentSnapshot> future = documentReference.get();
        DocumentSnapshot document = future.get();
        Teacher tm = null;
        if (document.exists()) {
            tm = document.toObject(Teacher.class);
        }
        return tm;
    }
}
