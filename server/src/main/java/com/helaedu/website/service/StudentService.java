package com.helaedu.website.service;

import com.helaedu.website.dto.StudentDto;
import com.helaedu.website.entity.Student;
import com.helaedu.website.repository.StudentRepository;
import org.springframework.stereotype.Service;

import java.util.concurrent.ExecutionException;

@Service
public class StudentService {
    private final StudentRepository studentRepository;

    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public StudentDto getStudent(String userId) throws ExecutionException, InterruptedException {
        Student student = studentRepository.getStudentById(userId);
        if (student != null) {
            return new StudentDto(student.getUserId(), student.getFirstName(),
                    student.getLastName(), student.getEmail(), student.getRegTimestamp(),
                    student.getNoteId(), student.getSubscriptionId());
        }
        return null;
    }
}
