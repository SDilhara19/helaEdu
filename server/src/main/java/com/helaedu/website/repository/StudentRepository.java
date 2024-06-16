package com.helaedu.website.repository;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.firebase.cloud.FirestoreClient;
import com.helaedu.website.entity.Student;
import org.springframework.stereotype.Repository;

import java.util.concurrent.ExecutionException;

@Repository
public class StudentRepository {
    public Student getStudentById(String userId) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentReference documentReference = dbFirestore.collection("students").document(userId);
        ApiFuture<DocumentSnapshot> future = documentReference.get();
        DocumentSnapshot document = future.get();
        Student student = null;
        if (document.exists()) {
            student = document.toObject(Student.class);
        }
        return student;
    }
}
