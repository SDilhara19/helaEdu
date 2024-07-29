package com.helaedu.website.controller;

import org.springframework.core.io.ClassPathResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.nio.file.Files;

@RestController
@RequestMapping("/public-key")
@CrossOrigin(origins = "*")
public class PublicKeyController {

    @GetMapping
    public ResponseEntity<String> getPublicKey() throws Exception {
        byte[] keyBytes = Files.readAllBytes(new ClassPathResource("public_key.pem").getFile().toPath());
        String publicKey = new String(keyBytes);
        return ResponseEntity.ok(publicKey);
    }
}
