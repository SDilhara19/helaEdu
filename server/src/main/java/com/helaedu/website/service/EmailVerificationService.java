package com.helaedu.website.service;

import com.google.firebase.auth.ActionCodeSettings;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.helaedu.website.dto.StudentDto;
import com.helaedu.website.dto.SubscriptionDto;
import com.helaedu.website.entity.Student;
import com.helaedu.website.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.concurrent.ExecutionException;

@Service
public class EmailVerificationService {
    @Value("${app.url}")
    private String appUrl;

    private final StudentRepository studentRepository;

    @Autowired
    private EmailService emailService;

    public EmailVerificationService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public void sendVerificationEmail(String userId, String email, String userRole) throws FirebaseAuthException {
        FirebaseAuth firebaseAuth = FirebaseAuth.getInstance();

        ActionCodeSettings actionCodeSettings = ActionCodeSettings.builder()
                .setUrl(appUrl + userRole + "/verify-email?uid=" + userId)
                .setHandleCodeInApp(true)
                .build();

        String verificationLink = firebaseAuth.generateEmailVerificationLink(email, actionCodeSettings);
        String subject = "Verify your email address";
        String text = "Please click the link below to verify your email address:\n" + verificationLink;
        emailService.sendSimpleMessage(email, subject, text);
    }

    public void sendSubscriptionEmail(String email, SubscriptionDto subscriptionDto) throws ExecutionException, InterruptedException {
        Student student = studentRepository.getStudentByEmail(email);
        String subject = "Your Premium Subscription Details";

        String formattedStartTimestamp = formatTimestamp(subscriptionDto.getStartTimestamp());
        String formattedEndTimestamp = formatTimestamp(subscriptionDto.getEndTimestamp());

        String text = "Dear " +
                        student.getFirstName() +
                        ",\n\nYour subscription has been created successfully.\n\nSubscription ID: " +
                        subscriptionDto.getSubscriptionId() +
                        "\nStart Date: " +
                        formattedStartTimestamp +
                        "\nEnd Date: " +
                        formattedEndTimestamp +
                        "\nPaid Amount: LKR " +
                        subscriptionDto.getPaidAmount() +
                        ".00\n\nThank you for subscribing!";
        emailService.sendSimpleMessage(email, subject, text);
    }

    public void sendCancellationEmail(String email, SubscriptionDto subscriptionDto) throws ExecutionException, InterruptedException {
        Student student = studentRepository.getStudentByEmail(email);
        String subject = "Your Premium Subscription has been Cancelled";

        String formattedStartTimestamp = formatTimestamp(subscriptionDto.getStartTimestamp());
        String formattedEndTimestamp = formatTimestamp(subscriptionDto.getEndTimestamp());

        String text = "Dear " +
                student.getFirstName() +
                ",\n\nYour subscription has been cancelled.\n\nSubscription ID: " +
                subscriptionDto.getSubscriptionId() +
                "\nStart Date: " +
                formattedStartTimestamp +
                "\nEnd Date: " +
                formattedEndTimestamp +
                "\n\nThank you for using our service!";
        emailService.sendSimpleMessage(email, subject, text);
    }

    private String formatTimestamp(String timestamp) {
        DateTimeFormatter inputFormatter = DateTimeFormatter.ISO_ZONED_DATE_TIME;
        DateTimeFormatter outputFormatter = DateTimeFormatter.ofPattern("dd MMM yyyy 'at' hh:mm a");
        ZonedDateTime zonedDateTime = ZonedDateTime.parse(timestamp, inputFormatter);
        return zonedDateTime.format(outputFormatter);
    }
}
