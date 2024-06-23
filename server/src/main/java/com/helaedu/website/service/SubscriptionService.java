package com.helaedu.website.service;

import com.helaedu.website.dto.SubscriptionDto;
import com.helaedu.website.entity.Student;
import com.helaedu.website.entity.Subscription;
import com.helaedu.website.repository.StudentRepository;
import com.helaedu.website.repository.SubscriptionRepository;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.concurrent.ExecutionException;
import java.util.stream.Collectors;

@Service
public class SubscriptionService {
    private final SubscriptionRepository subscriptionRepository;
    private final StudentRepository studentRepository;

    public SubscriptionService(SubscriptionRepository subscriptionRepository, StudentRepository studentRepository) {
        this.subscriptionRepository = subscriptionRepository;
        this.studentRepository = studentRepository;
    }

    public SubscriptionDto getSubscription(String subscriptionId) throws ExecutionException, InterruptedException {
        Subscription subscription = subscriptionRepository.getSubscriptionById(subscriptionId);
        if (subscription != null) {
            return new SubscriptionDto(
                    subscription.getSubscriptionId(),
                    subscription.getPaidAmount(),
                    subscription.getStartTimestamp(),
                    subscription.getEndTimestamp(),
                    false
            );
        }
        return null;
    }

    public List<SubscriptionDto> getAllSubscriptions() throws ExecutionException, InterruptedException {
        List<Subscription> subscriptions = subscriptionRepository.getAllSubscriptions();
        return subscriptions.stream().map(subscription -> new SubscriptionDto(
                subscription.getSubscriptionId(),
                subscription.getPaidAmount(),
                subscription.getStartTimestamp(),
                subscription.getEndTimestamp(),
                subscription.isCanceled()
        )).collect(Collectors.toList());
    }

    public List<SubscriptionDto> getActiveSubscriptions() throws ExecutionException, InterruptedException {
        List<Subscription> subscriptions = subscriptionRepository.getAllSubscriptions();
        Instant now = Instant.now();
        Instant thirtyDaysAgo = now.minus(30, ChronoUnit.DAYS);

        return subscriptions.stream()
                .filter(subscription -> !subscription.isCanceled() && Instant.parse(subscription.getStartTimestamp()).isAfter(thirtyDaysAgo))
                .map(subscription -> new SubscriptionDto(
                        subscription.getSubscriptionId(),
                        subscription.getPaidAmount(),
                        subscription.getStartTimestamp(),
                        subscription.getEndTimestamp(),
                        subscription.isCanceled()
                )).collect(Collectors.toList());
    }

    public void cancelSubscription(String subscriptionId) throws ExecutionException, InterruptedException {
        Subscription subscription = subscriptionRepository.getSubscriptionById(subscriptionId);
        if(subscription != null) {
            subscription.setCanceled(true);
            subscriptionRepository.updateSubscription(subscription);
        }
    }

    @Scheduled(cron = "0 0 0 * * ?") //Runs daily at midnight
    public void checkForExpiredSubscriptions() throws ExecutionException, InterruptedException {
        List<Student> students = studentRepository.getAllStudents();
        for(Student student : students) {
            String subscriptionId = student.getSubscriptionId();
            if(subscriptionId != null) {
                Subscription subscription = subscriptionRepository.getSubscriptionById(subscriptionId);
                if(subscription != null && Instant.parse(subscription.getEndTimestamp()).isBefore(Instant.now())) {
                    student.setSubscriptionId(null);
                    studentRepository.updateStudent(student.getUserId(), student);
                }
            }
        }
    }
}
