package com.helaedu.website.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Teacher extends User{
    private Boolean isModerator;
    private String proofRef;
    private String role;
    private boolean approved;
    private String about;
    private ArrayList<String> preferredSubjects;
    private String school;

    public Teacher(
            String userId,
            String firstName,
            String lastName,
            String email,
            String password,
            String regTimestamp,
            Boolean isModerator,
            String proofRef,
            String role,
            String profilePictureUrl,
            boolean approved,
            String about,
            ArrayList<String> preferredSubjects,
            String school
    ) {
        super.setUserId(userId);
        super.setFirstName(firstName);
        super.setLastName(lastName);
        super.setEmail(email);
        super.setPassword(password);
        super.setRegTimestamp(regTimestamp);
        this.isModerator = isModerator;
        this.proofRef = proofRef;
        this.role = role;
        super.setProfilePictureUrl(profilePictureUrl);
        this.approved = approved;
        this.about = about;
        this.preferredSubjects = preferredSubjects;
        this.school = school;
    }
}
