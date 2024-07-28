package com.helaedu.website.security;

import lombok.Getter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

public class CustomUserDetails implements UserDetails {
    private final String username;
    private final String password;
    @Getter
    private final String role;
    @Getter
    private final String profilePictureUrl;

    public CustomUserDetails(String username, String password, String role, String profilePictureUrl, Collection<? extends GrantedAuthority> authorities) {
        this.username = username;
        this.password = password;
        this.role = role;
        this.profilePictureUrl = profilePictureUrl;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }
}
