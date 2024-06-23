package com.helaedu.website.repository;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.firebase.cloud.FirestoreClient;
import com.helaedu.website.entity.Subscription;
import org.springframework.stereotype.Repository;

import java.util.concurrent.ExecutionException;

@Repository
public class SubscriptionRepository {
    public void createSubscription(Subscription subscription) {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentReference documentReference = dbFirestore.collection("subscriptions").document(subscription.getSubscriptionId());
        documentReference.set(subscription);
    }

    public Subscription getSubscriptionById(String subscriptionId) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentReference documentReference = dbFirestore.collection("subscriptions").document(subscriptionId);
        ApiFuture<DocumentSnapshot> future = documentReference.get();
        DocumentSnapshot document = future.get();
        Subscription subscription = null;
        if (document.exists()) {
            subscription = document.toObject(Subscription.class);
        }
        return subscription;
    }

    public void updateSubscription(Subscription subscription) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentReference documentReference = dbFirestore.collection("subscriptions").document(subscription.getSubscriptionId());
        documentReference.set(subscription);
    }

    public boolean exists(String subscriptionId) throws ExecutionException, InterruptedException {
        return getSubscriptionById(subscriptionId) != null;
    }
}
