package com.helaedu.website.config;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.FirebaseToken;
import com.helaedu.website.service.CustomUserDetailsService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Collections;


@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig {
    private final CustomUserDetailsService userDetailsService;
    private final JwtRequestFilter jwtRequestFilter;

    public SecurityConfig(CustomUserDetailsService userDetailsService, JwtRequestFilter jwtRequestFilter) {
        this.userDetailsService = userDetailsService;
        this.jwtRequestFilter = jwtRequestFilter;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers(HttpMethod.PUT, "/students/**").hasRole("STUDENT")
                        .requestMatchers(HttpMethod.POST, "/students/**").permitAll()
                        .requestMatchers(HttpMethod.DELETE, "/students/**").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.GET, "/students/**").authenticated()

                        .requestMatchers(HttpMethod.PUT, "/articles/{articleId}/approve").hasRole("MODERATOR")
                        .requestMatchers(HttpMethod.PUT, "/articles/{articleId}/decline").hasRole("MODERATOR")
                        .requestMatchers(HttpMethod.PUT, "/articles/**").permitAll()
                        .requestMatchers(HttpMethod.POST, "/articles/**").hasAnyRole("TEACHER", "MODERATOR")
                        .requestMatchers(HttpMethod.DELETE, "/articles/**").permitAll()
                        .requestMatchers(HttpMethod.GET, "/articles/**").permitAll()

                        .requestMatchers(HttpMethod.PUT, "/teachers/**").permitAll()
                        .requestMatchers(HttpMethod.POST, "/teachers/**").permitAll()
                        .requestMatchers(HttpMethod.DELETE, "/teachers/**").permitAll()
                        .requestMatchers(HttpMethod.GET, "/teachers/**").hasAnyRole("TEACHER", "MODERATOR")

                        .requestMatchers(HttpMethod.PUT, "/moderators/**").permitAll()
                        .requestMatchers(HttpMethod.POST, "/moderators/**").permitAll()
                        .requestMatchers(HttpMethod.DELETE, "/moderators/**").permitAll()
                        .requestMatchers(HttpMethod.GET, "/moderators/**").hasRole("MODERATOR")

                        .requestMatchers(HttpMethod.GET, "/subscriptions/**").permitAll()

                        .anyRequest().permitAll()
                )
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public DaoAuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(userDetailsService);
        authProvider.setPasswordEncoder(passwordEncoder());
        return authProvider;
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }
}

