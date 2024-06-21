package com.helaedu.website.repository;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import com.helaedu.website.entity.Teacher;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

@Repository
public class TeacherRepository {
    public String createTeacher(Teacher teacher) {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentReference documentReference  = dbFirestore.collection("teachers").document(teacher.getUserId());
        documentReference .set(teacher);
        return teacher.getUserId();
    }
    public List<Teacher> getAllTeachers() throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        CollectionReference teachersCollection = dbFirestore.collection("teachers");
        ApiFuture<QuerySnapshot> future = teachersCollection.get();
        List<Teacher> teachers = new ArrayList<>();
        QuerySnapshot querySnapshot = future.get();
        for (DocumentSnapshot document : querySnapshot.getDocuments()) {
            Teacher teacher = document.toObject(Teacher.class);
            teachers.add(teacher);
        }
        return teachers;
    }
    public Teacher getTeacherById(String userId) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentReference documentReference = dbFirestore.collection("teachers").document(userId);
        ApiFuture<DocumentSnapshot> future = documentReference.get();
        DocumentSnapshot document = future.get();
        Teacher teacher = null;
        if (document.exists()) {
            teacher = document.toObject(Teacher.class);
        }
        return teacher;
    }

    public String updateTeacher(String userId, Teacher teacher) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentReference documentReference = dbFirestore.collection("teachers").document(userId);
        ApiFuture<WriteResult> future = documentReference.set(teacher);
        return future.get().getUpdateTime().toString();
    }

    public String deleteTeacher(String userId) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentReference documentReference = dbFirestore.collection("teachers").document(userId);
        ApiFuture<WriteResult> future = documentReference.delete();
        return future.get().getUpdateTime().toString();
    }

    public Teacher getTeacherByEmail(String email) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        CollectionReference teachersCollection = dbFirestore.collection("teachers");
        ApiFuture<QuerySnapshot> future = teachersCollection.whereEqualTo("email", email).get();
        List<Teacher> teachers = future.get().toObjects(Teacher.class);
        return teachers.isEmpty() ? null : teachers.get(0);
    }

    public boolean exists(String userId) throws ExecutionException, InterruptedException {
        return getTeacherById(userId) != null;
    }
}
