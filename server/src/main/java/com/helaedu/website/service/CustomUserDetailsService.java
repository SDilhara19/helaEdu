package com.helaedu.website.service;

import com.helaedu.website.entity.Admin;
import com.helaedu.website.entity.Student;
import com.helaedu.website.entity.Teacher;
import com.helaedu.website.repository.AdminRepository;
import com.helaedu.website.repository.StudentRepository;
import com.helaedu.website.repository.TeacherRepository;
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
                return new User(student.getUserId(), student.getPassword(),
                        Collections.singletonList(new SimpleGrantedAuthority(student.getRole())));
            }

            Teacher teacher = teacherRepository.getTeacherByEmail(email);
            if (teacher != null) {
                return new User(teacher.getUserId(), teacher.getPassword(),
                        Collections.singletonList(new SimpleGrantedAuthority(teacher.getRole())));
            }

            Admin admin = adminRepository.getAdminByEmail(email);
            if (admin != null) {
                return new User(admin.getUserId(), admin.getPassword(),
                        Collections.singletonList(new SimpleGrantedAuthority(admin.getRole())));
            }

            throw new UsernameNotFoundException("User not found");
        } catch (ExecutionException | InterruptedException e) {
            throw new UsernameNotFoundException("User not found", e);
        }
    }
}
