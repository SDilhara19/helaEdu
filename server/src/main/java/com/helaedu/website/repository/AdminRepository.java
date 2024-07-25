package com.helaedu.website.repository;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import com.helaedu.website.entity.Admin;
import com.helaedu.website.entity.Student;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

@Repository
public class AdminRepository {
    public String createAdmin(Admin admin) {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentReference documentReference  = dbFirestore.collection("admins").document(admin.getUserId());
        documentReference .set(admin);
        return admin.getUserId();
    }
    public List<Admin> getAllAdmins() throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        CollectionReference adminsCollection = dbFirestore.collection("admins");
        ApiFuture<QuerySnapshot> future = adminsCollection.get();
        List<Admin> admins = new ArrayList<>();
        QuerySnapshot querySnapshot = future.get();
        for (DocumentSnapshot document : querySnapshot.getDocuments()) {
            Admin admin = document.toObject(Admin.class);
            admins.add(admin);
        }
        return admins;
    }
    public Admin getAdminById(String userId) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentReference documentReference = dbFirestore.collection("admins").document(userId);
        ApiFuture<DocumentSnapshot> future = documentReference.get();
        DocumentSnapshot document = future.get();
        Admin admin = null;
        if (document.exists()) {
            admin = document.toObject(Admin.class);
        }
        return admin;
    }

    public String updateAdmin(String userId, Admin admin) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentReference documentReference = dbFirestore.collection("admins").document(userId);
        ApiFuture<WriteResult> future = documentReference.set(admin);
        return future.get().getUpdateTime().toString();
    }

    public String updateAdminByEmail(String email, Admin admin) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        CollectionReference adminsCollection = dbFirestore.collection("admins");
        ApiFuture<QuerySnapshot> future = adminsCollection.whereEqualTo("email", email).get();
        List<QueryDocumentSnapshot> documents = future.get().getDocuments();
        DocumentReference documentReference = documents.get(0).getReference();
        ApiFuture<WriteResult> updateFuture = documentReference.set(admin);
        return updateFuture.get().getUpdateTime().toString();
    }

    public String deleteAdmin(String userId) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentReference documentReference = dbFirestore.collection("admins").document(userId);
        ApiFuture<WriteResult> future = documentReference.delete();
        return future.get().getUpdateTime().toString();
    }

    public Admin getAdminByEmail(String email) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        CollectionReference adminsCollection = dbFirestore.collection("admins");
        ApiFuture<QuerySnapshot> future = adminsCollection.whereEqualTo("email", email).get();
        List<Admin> admins = future.get().toObjects(Admin.class);
        return admins.isEmpty() ? null : admins.get(0);
    }

    public boolean exists(String userId) throws ExecutionException, InterruptedException {
        return getAdminById(userId) != null;
    }
}
