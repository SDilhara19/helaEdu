package com.helaedu.website.service;

import com.helaedu.website.dto.StudentDto;
import com.helaedu.website.entity.Student;
import com.helaedu.website.repository.StudentRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;

import java.util.concurrent.ExecutionException;
import java.util.stream.Collectors;

@Service
public class StudentService {
    private final StudentRepository studentRepository;

    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public String createStudent(StudentDto studentDto) throws ExecutionException, InterruptedException {
        Student existingStudent = studentRepository.getStudentByEmail(studentDto.getEmail());
        if (existingStudent != null) {
            throw new IllegalArgumentException("Email already exists");
        }

        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        Student student = new Student(
                studentDto.getUserId(),
                studentDto.getFirstName(),
                studentDto.getLastName(),
                studentDto.getEmail(),
                encoder.encode(studentDto.getPassword()),
                Instant.now().toString(),
                studentDto.getNoteId(),
                studentDto.getSubscriptionId()
        );
        return studentRepository.createStudent(student);
    }

    public List<StudentDto> getAllStudents() throws ExecutionException, InterruptedException {
        List<Student> students = studentRepository.getAllStudents();
        return students.stream().map(student ->
                        new StudentDto(
                                student.getUserId(),
                                student.getFirstName(),
                                student.getLastName(),
                                student.getEmail(),
                                student.getPassword(),
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
                    student.getPassword(),
                    student.getRegTimestamp(),
                    student.getNoteId(),
                    student.getSubscriptionId()
            );
        }
        return null;
    }

    public String updateStudent(String userId, StudentDto studentDto) throws ExecutionException, InterruptedException {
        Student existingStudent = studentRepository.getStudentById(userId);
        if(existingStudent == null) {
            throw new IllegalArgumentException("Student not found");
        }

        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        Student student = new Student(
                studentDto.getUserId(),
                studentDto.getFirstName(),
                studentDto.getLastName(),
                studentDto.getEmail(),
                encoder.encode(studentDto.getPassword()),
                studentDto.getRegTimestamp(),
                studentDto.getNoteId(),
                studentDto.getSubscriptionId()
        );
        return studentRepository.updateStudent(userId, student);
    }

    public String deleteStudent(String userId) throws ExecutionException, InterruptedException {
        return studentRepository.deleteStudent(userId);
    }
}
