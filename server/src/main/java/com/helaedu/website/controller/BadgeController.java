package com.helaedu.website.controller;

import com.helaedu.website.dto.BadgeDto;
import com.helaedu.website.service.BadgeService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/badges")
@CrossOrigin(origins = "*")
public class BadgeController {
    private final BadgeService badgeService;
    public BadgeController(BadgeService badgeService){
        this.badgeService = badgeService;
    }
    //add badges
    @PostMapping("/createBadge")
    public ResponseEntity<String> createBadge(@Valid @RequestBody BadgeDto badgeDto, BindingResult bindingResult) throws ExecutionException, InterruptedException {
        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(bindingResult.getFieldError().getDefaultMessage(), HttpStatus.BAD_REQUEST);
        }
        try {
            String badgeId = badgeService.createBadge(badgeDto);
            return new ResponseEntity<>(badgeId, HttpStatus.CREATED);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (ExecutionException | InterruptedException e) {
            return new ResponseEntity<>("Error creating badge", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
