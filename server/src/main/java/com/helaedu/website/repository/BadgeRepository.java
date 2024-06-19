package com.helaedu.website.repository;

import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.Firestore;
import com.google.firebase.cloud.FirestoreClient;
import com.helaedu.website.entity.Badge;
import org.springframework.stereotype.Repository;

@Repository
public class BadgeRepository {
    public String createBadge(Badge badge) {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentReference documentReference  = dbFirestore.collection("badges").document(badge.getBadgeId());
        documentReference .set(badge);
        return badge.getBadgeId();
    }

}
