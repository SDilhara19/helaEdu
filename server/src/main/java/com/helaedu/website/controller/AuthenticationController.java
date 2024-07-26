package com.helaedu.website.controller;

import com.helaedu.website.dto.AuthenticationRequest;
import com.helaedu.website.dto.AuthenticationResponse;
import com.helaedu.website.dto.ValidationErrorResponse;
import com.helaedu.website.service.CustomUserDetailsService;
import com.helaedu.website.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/authenticate")
@CrossOrigin(origins = "*")
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private CustomUserDetailsService customUserDetailsService;

    @Autowired
    private JwtUtil jwtTokenUtil;

    @PostMapping
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception {

        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authenticationRequest.getEmail(), authenticationRequest.getPassword())
            );

            final UserDetails userDetails = customUserDetailsService
                    .loadUserByUsername(authenticationRequest.getEmail());

            if (userDetails == null) {
                ValidationErrorResponse errorResponse = new ValidationErrorResponse();
                errorResponse.addViolation("email", "Email not verified");
                return new ResponseEntity<>(errorResponse, HttpStatus.UNAUTHORIZED);
            }

            final String jwt = jwtTokenUtil.generateToken(userDetails);

            return ResponseEntity.ok(new AuthenticationResponse(jwt));
        } catch (UsernameNotFoundException e) {
            ValidationErrorResponse errorResponse = new ValidationErrorResponse();
            errorResponse.addViolation("email", "Email not verified");
            return new ResponseEntity<>(errorResponse, HttpStatus.UNAUTHORIZED);
        } catch (BadCredentialsException e) {
            ValidationErrorResponse errorResponse = new ValidationErrorResponse();
            errorResponse.addViolation("password", "Incorrect username or password");
            return new ResponseEntity<>(errorResponse, HttpStatus.UNAUTHORIZED);
        } catch (Exception e) {
            ValidationErrorResponse errorResponse = new ValidationErrorResponse();
            errorResponse.addViolation("error", "Authentication failed");
            return new ResponseEntity<>(errorResponse, HttpStatus.UNAUTHORIZED);
        }
    }
}


