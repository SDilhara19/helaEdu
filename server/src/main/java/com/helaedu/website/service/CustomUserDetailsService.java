package com.helaedu.website.service;

import com.helaedu.website.entity.Admin;
import com.helaedu.website.entity.Student;
import com.helaedu.website.entity.Teacher;
import com.helaedu.website.repository.AdminRepository;
import com.helaedu.website.repository.StudentRepository;
import com.helaedu.website.repository.TeacherRepository;
import com.helaedu.website.security.CustomUserDetails;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
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
    private final TeacherRepository teacherRepository;
    private final AdminRepository adminRepository;

    public CustomUserDetailsService(StudentRepository studentRepository, TeacherRepository teacherRepository, AdminRepository adminRepository) {
        this.studentRepository = studentRepository;
        this.teacherRepository = teacherRepository;
        this.adminRepository = adminRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        try {
            Student student = studentRepository.getStudentByEmail(email);
            if (student != null) {
                if (!student.isEmailVerified()) {
                    throw new UsernameNotFoundException("Email not verified");
                }
                return new CustomUserDetails(student.getEmail(), student.getPassword(), student.getRole(),
                        Collections.singletonList(new SimpleGrantedAuthority(student.getRole())));
            }

            Teacher teacher = teacherRepository.getTeacherByEmail(email);
            if (teacher != null) {
                if (!teacher.isEmailVerified()) {
                    throw new UsernameNotFoundException("Email not verified");
                }
                return new CustomUserDetails(teacher.getEmail(), teacher.getPassword(), teacher.getRole(),
                        Collections.singletonList(new SimpleGrantedAuthority(teacher.getRole())));
            }

            Admin admin = adminRepository.getAdminByEmail(email);
            if (admin != null) {
                if (!admin.isEmailVerified()) {
                    throw new UsernameNotFoundException("Email not verified");
                }
                return new User(admin.getEmail(), admin.getPassword(),
                        Collections.singletonList(new SimpleGrantedAuthority(admin.getRole())));
            }

            throw new UsernameNotFoundException("User not found");
        } catch (ExecutionException | InterruptedException e) {
            throw new UsernameNotFoundException("User not found", e);
        }
    }
}
