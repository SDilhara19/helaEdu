package com.helaedu.website.util;

import java.util.HashMap;
import java.util.Map;

public class RequestUtil {

    public static Map<String, String> createEmailRequestBody(String email) {
        Map<String, String> requestBody = new HashMap<>();
        requestBody.put("email", email);
        return requestBody;
    }
}
