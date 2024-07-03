package com.helaedu.website.service;

import com.google.firebase.auth.ActionCodeSettings;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.UserRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class EmailVerificationService {
    @Value("${app.url}")
    private String appUrl;

    @Autowired
    private EmailService emailService;

    public void sendVerificationEmail(String userId, String email) throws FirebaseAuthException {
        FirebaseAuth firebaseAuth = FirebaseAuth.getInstance();

        ActionCodeSettings actionCodeSettings = ActionCodeSettings.builder()
                .setUrl(appUrl + "/verify-email?uid=" + userId)
                .setHandleCodeInApp(true)
                .build();

        String verificationLink = firebaseAuth.generateEmailVerificationLink(email, actionCodeSettings);
        String subject = "Verify your email address";
        String text = "Please click the link below to verify your email address:\n" + verificationLink;
        emailService.sendSimpleMessage(email, subject, text);
    }

    public boolean isEmailExistsInFirebase(String email) {
        try {
            UserRecord userRecord = FirebaseAuth.getInstance().getUserByEmail(email);
            return userRecord != null;
        } catch (FirebaseAuthException e) {
            if (e.getErrorCode().equals("USER_NOT_FOUND")) {
                return false;
            } else {
                throw new RuntimeException("Error checking email existence in Firebase", e);
            }
        }
    }
}
