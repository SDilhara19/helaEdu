package com.helaedu.website.controller;


import com.helaedu.website.dto.SubscriptionDto;
import com.helaedu.website.service.SubscriptionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/subscriptions")
@CrossOrigin(origins = "*")
public class SubscriptionController {
    private final SubscriptionService subscriptionService;

    public SubscriptionController(SubscriptionService subscriptionService) {
        this.subscriptionService = subscriptionService;
    }

    @GetMapping
    public ResponseEntity<List<SubscriptionDto>> getAllSubscriptions() throws ExecutionException, InterruptedException {
        List<SubscriptionDto> subscriptions = subscriptionService.getAllSubscriptions();
        return new ResponseEntity<>(subscriptions, HttpStatus.OK);
    }

    @GetMapping("/active")
    public ResponseEntity<List<SubscriptionDto>> getActiveSubscriptions() throws ExecutionException, InterruptedException {
        List<SubscriptionDto> activeSubscriptions = subscriptionService.getActiveSubscriptions();
        return new ResponseEntity<>(activeSubscriptions, HttpStatus.OK);
    }
}
