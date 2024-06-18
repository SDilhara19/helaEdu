package com.helaedu.website.service;

import com.helaedu.website.entity.Student;
import com.helaedu.website.repository.StudentRepository;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.concurrent.ExecutionException;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final StudentRepository studentRepository;

    public CustomUserDetailsService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        try {
            Student student = studentRepository.getStudentById(username);
            if(student == null) {
                throw new UsernameNotFoundException("Student not found");
            }
            return new User(student.getUserId(), student.getPassword(), Collections.emptyList());
        } catch (ExecutionException | InterruptedException e) {
            throw new UsernameNotFoundException("Student not found", e);
        }
    }
}
