package com.helaedu.website.repository;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;
import com.helaedu.website.entity.Note;
import org.springframework.stereotype.Repository;

import java.util.concurrent.ExecutionException;

@Repository
public class NoteRepository {
    public String createNote(Note note) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> future = dbFirestore.collection("notes").document(note.getNoteId()).set(note);
        return future.get().getUpdateTime().toString();
    }

    public Note getNoteById(String noteId) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentReference documentReference = dbFirestore.collection("notes").document(noteId);
        ApiFuture<DocumentSnapshot> future = documentReference.get();
        DocumentSnapshot document = future.get();
        Note note = null;
        if (document.exists()) {
            note = document.toObject(Note.class);
        }
        return note;
    }
}
