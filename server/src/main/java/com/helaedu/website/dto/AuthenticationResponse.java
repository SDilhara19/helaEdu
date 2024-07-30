package com.helaedu.website.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class AuthenticationResponse {
    private final String jwt;
    private final String role;
    private final String profilePictureUrl;
}