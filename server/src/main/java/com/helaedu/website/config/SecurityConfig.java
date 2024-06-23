package com.helaedu.website.config;

import com.helaedu.website.service.CustomUserDetailsService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;


@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig {

    private final CustomUserDetailsService userDetailsService;

    public SecurityConfig(CustomUserDetailsService userDetailsService) {
        this.userDetailsService = userDetailsService;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers(HttpMethod.PUT, "/students/**").permitAll()
                        .requestMatchers(HttpMethod.POST, "/students/**").permitAll()
                        .requestMatchers(HttpMethod.DELETE, "/students/**").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.GET, "/students/**").permitAll()

                        .requestMatchers(HttpMethod.PUT, "/articles/**").permitAll()
                        .requestMatchers(HttpMethod.POST, "/articles/**").permitAll()
                        .requestMatchers(HttpMethod.DELETE, "/articles/**").permitAll()
                        .requestMatchers(HttpMethod.GET, "/articles/**").authenticated()

                        .requestMatchers(HttpMethod.PUT, "/teachers/**").permitAll()
                        .requestMatchers(HttpMethod.POST, "/teachers/**").permitAll()
                        .requestMatchers(HttpMethod.DELETE, "/teachers/**").permitAll()
                        .requestMatchers(HttpMethod.GET, "/teachers/**").hasAnyRole("TEACHER", "MODERATOR")

                        .requestMatchers(HttpMethod.PUT, "/moderators/**").permitAll()
                        .requestMatchers(HttpMethod.POST, "/moderators/**").permitAll()
                        .requestMatchers(HttpMethod.DELETE, "/moderators/**").permitAll()
                        .requestMatchers(HttpMethod.GET, "/moderators/**").hasRole("MODERATOR")
                        .anyRequest().authenticated()
                )
                .httpBasic(httpBasic -> {});
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
