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
public class ModeratorRepository {
    public String createModerator(Teacher moderator) {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentReference documentReference  = dbFirestore.collection("teachers").document(moderator.getUserId());
        documentReference .set(moderator);
        return moderator.getUserId();
    }

    public List<Teacher> getAllModerators() throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        CollectionReference teachersCollection = dbFirestore.collection("teachers");
        ApiFuture<QuerySnapshot> future = teachersCollection.whereEqualTo("isModerator", true).get();
        List<Teacher> moderators = new ArrayList<>();
        QuerySnapshot querySnapshot = future.get();
        for (DocumentSnapshot document : querySnapshot.getDocuments()) {
            Teacher moderator = document.toObject(Teacher.class);
            moderators.add(moderator);
        }
        return moderators;
    }

    public Teacher getModeratorById(String userId) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentReference documentReference = dbFirestore.collection("teachers").document(userId);
        ApiFuture<DocumentSnapshot> future = documentReference.get();
        DocumentSnapshot document = future.get();
        Teacher moderator = null;
        if (document.exists()) {
            moderator = document.toObject(Teacher.class);
            if (!moderator.getIsModerator()) {
                moderator = null;
            }
        }
        return moderator;
    }

    public String updateModerator(String userId, Teacher moderator) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentReference documentReference = dbFirestore.collection("teachers").document(userId);
        ApiFuture<DocumentSnapshot> future = documentReference.get();
        DocumentSnapshot document = future.get();
        if (document.exists()) {
            Teacher existingTeacher = document.toObject(Teacher.class);
            if (!existingTeacher.getIsModerator()) {
                throw new IllegalArgumentException("Moderator not found");
            }
            ApiFuture<WriteResult> writeFuture = documentReference.set(moderator);
            return writeFuture.get().getUpdateTime().toString();
        } else {
            throw new IllegalArgumentException("Moderator not found");
        }
    }

    public String deleteModerator(String userId) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentReference documentReference = dbFirestore.collection("teachers").document(userId);
        ApiFuture<DocumentSnapshot> future = documentReference.get();
        DocumentSnapshot document = future.get();
        if (document.exists()) {
            Teacher existingModerator = document.toObject(Teacher.class);
            if (!existingModerator.getIsModerator()) {
                throw new IllegalArgumentException("Moderator not found");
            }
            ApiFuture<WriteResult> writeFuture = documentReference.delete();
            return writeFuture.get().getUpdateTime().toString();
        } else {
            throw new IllegalArgumentException("Moderator not found");
        }
    }

    public Teacher getModeratorByEmail(String email) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        CollectionReference teachersCollection = dbFirestore.collection("teachers");
        ApiFuture<QuerySnapshot> future = teachersCollection.whereEqualTo("email", email).get();
        List<Teacher> teachers = future.get().toObjects(Teacher.class);
        return teachers.isEmpty() ? null : teachers.get(0);
    }

    public boolean exists(String userId) throws ExecutionException, InterruptedException {
        return getModeratorById(userId) != null;
    }

    public String demoteToTeacher(String userId) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentReference documentReference = dbFirestore.collection("teachers").document(userId);
        ApiFuture<DocumentSnapshot> future = documentReference.get();
        DocumentSnapshot document = future.get();
        if (document.exists()) {
            documentReference.update("isModerator", false);
            documentReference.update("role", "ROLE_TEACHER");
            return "Moderator demoted to teacher";
        } else {
            throw new IllegalArgumentException("Teacher not found");
        }
    }
}
