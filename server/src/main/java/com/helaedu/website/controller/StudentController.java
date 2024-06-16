package com.helaedu.website.controller;

import com.helaedu.website.dto.StudentDto;
import com.helaedu.website.service.StudentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/students")
public class StudentController {
    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping("/{userId}")
    public ResponseEntity<StudentDto> getStudent(@PathVariable String userId) throws ExecutionException, InterruptedException {
        StudentDto studentDto = studentService.getStudent(userId);
        if (studentDto != null) {
            return ResponseEntity.ok(studentDto);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
