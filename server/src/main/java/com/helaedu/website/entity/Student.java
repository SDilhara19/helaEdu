package com.helaedu.website.entity;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Student extends User {
    private String noteId;
    private String subscriptionId;

    public Student(String userId, String firstName, String lastName, String email, String password, String regTimestamp, String noteId, String subscriptionId) {
        super.setUserId(userId);
        super.setFirstName(firstName);
        super.setLastName(lastName);
        super.setEmail(email);
        super.setPassword(password);
        super.setRegTimestamp(regTimestamp);
        this.noteId = noteId;
        this.subscriptionId = subscriptionId;
    }
}
