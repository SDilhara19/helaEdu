package com.helaedu.website.service;

import com.helaedu.website.dto.StudentDto;
import com.helaedu.website.entity.Student;
import com.helaedu.website.repository.StudentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

import java.util.concurrent.ExecutionException;
import java.util.stream.Collectors;

@Service
public class StudentService {
    private final StudentRepository studentRepository;

    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public List<StudentDto> getAllStudents() throws ExecutionException, InterruptedException {
        List<Student> students = studentRepository.getAllStudents();
        return students.stream().map(student ->
                        new StudentDto(
                                student.getUserId(),
                                student.getFirstName(),
                                student.getLastName(),
                                student.getEmail(),
                                student.getRegTimestamp(),
                                student.getNoteId(),
                                student.getSubscriptionId()
                        )
                )
                .collect(Collectors.toList());
    }

    public StudentDto getStudent(String userId) throws ExecutionException, InterruptedException {
        Student student = studentRepository.getStudentById(userId);
        if (student != null) {
            return new StudentDto(
                    student.getUserId(),
                    student.getFirstName(),
                    student.getLastName(),
                    student.getEmail(),
                    student.getRegTimestamp(),
                    student.getNoteId(),
                    student.getSubscriptionId()
            );
        }
        return null;
    }
}
