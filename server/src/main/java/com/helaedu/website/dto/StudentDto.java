package com.helaedu.website.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class StudentDto {
    private String userId;
    private String firstName;
    private String lastName;
    private String email;
    private String regTimestamp;
    private String noteId;
    private String subscriptionId;
}
