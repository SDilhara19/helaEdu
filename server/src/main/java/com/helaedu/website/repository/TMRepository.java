package com.helaedu.website.repository;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import com.helaedu.website.entity.Student;
import com.helaedu.website.entity.Teacher;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
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

    public Teacher getTMByEmail(String email) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        CollectionReference teachersCollection = dbFirestore.collection("teachers");
        ApiFuture<QuerySnapshot> future = teachersCollection.whereEqualTo("email", email).get();
        List<Teacher> teachers = future.get().toObjects(Teacher.class);
        return teachers.isEmpty() ? null : teachers.get(0);
    }

    public String updateTMByEmail(String email, Teacher tm) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        CollectionReference teachersCollection = dbFirestore.collection("teachers");
        ApiFuture<QuerySnapshot> future = teachersCollection.whereEqualTo("email", email).get();
        List<QueryDocumentSnapshot> documents = future.get().getDocuments();
        DocumentReference documentReference = documents.get(0).getReference();
        ApiFuture<WriteResult> updateFuture = documentReference.set(tm);
        return updateFuture.get().getUpdateTime().toString();
    }

    public List<Teacher> getPendingTMs() throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        CollectionReference tmsCollection = dbFirestore.collection("teachers");
        ApiFuture<QuerySnapshot> future = tmsCollection.whereEqualTo("approved", false).get();
        List<Teacher> tms = new ArrayList<>();
        QuerySnapshot querySnapshot = future.get();
        for (DocumentSnapshot document : querySnapshot.getDocuments()) {
            Teacher teacher = document.toObject(Teacher.class);
            tms.add(teacher);
        }
        return tms;
    }
}
