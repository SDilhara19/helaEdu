package com.helaedu.website.entity;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class User {
    private String userId;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String regTimestamp;
    private String role;
    private boolean emailVerified;
}
