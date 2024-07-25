package com.helaedu.website.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class TeacherDto {
    private String userId;

    @NotEmpty(message = "First name is required")
    private String firstName;

    @NotEmpty(message = "Last name is required")
    private String lastName;

    @NotEmpty(message = "Email is required")
    @Email(message = "Email should be valid")
    private String email;

    @NotEmpty(message = "Password is required")
    private String password;

    private String regTimestamp;
    private Boolean isModerator;

    @NotEmpty(message = "Proof is required")
    private String proofRef;

    private String role;
    private boolean emailVerified;
    private String profilePictureUrl;
    private boolean approved;
}
