package com.helaedu.website.util;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

public class UserUtil {
    public static String getCurrentUserId() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return (authentication != null) ? (String) authentication.getPrincipal() : null;
    }
}
