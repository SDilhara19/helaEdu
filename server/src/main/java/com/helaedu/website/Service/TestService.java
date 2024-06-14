package com.helaedu.website.Service;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.firebase.cloud.FirestoreClient;
import com.helaedu.website.Entity.Test;
import org.springframework.stereotype.Service;

import java.util.concurrent.ExecutionException;

@Service
public class TestService {

    public String createTest(Test test) throws ExecutionException, InterruptedException {
        return null;
    }

    public Test getTest(String documentId) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentReference documentReference = dbFirestore.collection("test_user").document(documentId);
        ApiFuture<DocumentSnapshot> future = documentReference.get();
        DocumentSnapshot document = future.get();
        Test test;
        if(document.exists()) {
            test = document.toObject(Test.class);
            return test;
        }
        return null;
    }

    public String updateTest(Test test) {
        return null;
    }

    public String deleteTest(String documentId) {
        return null;
    }
}
