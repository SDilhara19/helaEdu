package com.helaedu.website.repository;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import com.helaedu.website.entity.Student;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

@Repository
public class StudentRepository {
    public String createStudent(Student student) {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentReference documentReference  = dbFirestore.collection("students").document(student.getUserId());
        documentReference .set(student);
        return student.getUserId();
    }
    public List<Student> getAllStudents() throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        CollectionReference studentsCollection = dbFirestore.collection("students");
        ApiFuture<QuerySnapshot> future = studentsCollection.get();
        List<Student> students = new ArrayList<>();
        QuerySnapshot querySnapshot = future.get();
        for (DocumentSnapshot document : querySnapshot.getDocuments()) {
            Student student = document.toObject(Student.class);
            students.add(student);
        }
        return students;
    }

    public List<Student> getAllStudents(int page, int size) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        CollectionReference studentsCollection = dbFirestore.collection("students");

        Query query = studentsCollection.orderBy("regTimestamp")
                .offset(page * size)
                .limit(size);

        ApiFuture<QuerySnapshot> future = query.get();
        List<Student> students = new ArrayList<>();
        QuerySnapshot querySnapshot = future.get();
        for (DocumentSnapshot document : querySnapshot.getDocuments()) {
            Student student = document.toObject(Student.class);
            students.add(student);
        }
        return students;
    }

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

    public String updateStudent(String userId, Student student) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentReference documentReference = dbFirestore.collection("students").document(userId);
        ApiFuture<WriteResult> future = documentReference.set(student);
        return future.get().getUpdateTime().toString();
    }

    public String updateStudentByEmail(String email, Student student) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        CollectionReference studentsCollection = dbFirestore.collection("students");
        ApiFuture<QuerySnapshot> future = studentsCollection.whereEqualTo("email", email).get();
        List<QueryDocumentSnapshot> documents = future.get().getDocuments();
        DocumentReference documentReference = documents.get(0).getReference();
        ApiFuture<WriteResult> updateFuture = documentReference.set(student);
        return updateFuture.get().getUpdateTime().toString();
    }

    public String deleteStudent(String userId) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentReference documentReference = dbFirestore.collection("students").document(userId);
        ApiFuture<WriteResult> future = documentReference.delete();
        return future.get().getUpdateTime().toString();
    }

    public String deleteStudentByEmail(String email) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        CollectionReference studentsCollection = dbFirestore.collection("students");
        ApiFuture<QuerySnapshot> future = studentsCollection.whereEqualTo("email", email).get();
        List<QueryDocumentSnapshot> documents = future.get().getDocuments();
        DocumentReference documentReference = documents.get(0).getReference();
        ApiFuture<WriteResult> deleteFuture = documentReference.delete();
        return deleteFuture.get().getUpdateTime().toString();
    }

    public Student getStudentByEmail(String email) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        CollectionReference studentsCollection = dbFirestore.collection("students");
        ApiFuture<QuerySnapshot> future = studentsCollection.whereEqualTo("email", email).get();
        List<Student> students = future.get().toObjects(Student.class);
        return students.isEmpty() ? null : students.get(0);
    }

    public boolean exists(String userId) throws ExecutionException, InterruptedException {
        return getStudentById(userId) != null;
    }
}
