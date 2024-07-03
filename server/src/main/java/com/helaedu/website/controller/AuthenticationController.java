package com.helaedu.website.controller;

import com.helaedu.website.service.CustomUserDetailsService;
import com.helaedu.website.util.JwtUtil;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
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
                    new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword())
            );

            final UserDetails userDetails = customUserDetailsService
                    .loadUserByUsername(authenticationRequest.getUsername());

            if (userDetails == null) {
                return new ResponseEntity<>("Email not verified", HttpStatus.UNAUTHORIZED);
            }

            final String jwt = jwtTokenUtil.generateToken(userDetails);

            return ResponseEntity.ok(new AuthenticationResponse(jwt));
        } catch (UsernameNotFoundException e) {
            return new ResponseEntity<>("Email not verified", HttpStatus.UNAUTHORIZED);
        } catch (Exception e) {
            return new ResponseEntity<>("Incorrect username or password", HttpStatus.UNAUTHORIZED);
        }
    }
}

@Getter
@Setter
class AuthenticationRequest {
    private String username;
    private String password;
}

@Getter
@AllArgsConstructor
class AuthenticationResponse {
    private final String jwt;
}
