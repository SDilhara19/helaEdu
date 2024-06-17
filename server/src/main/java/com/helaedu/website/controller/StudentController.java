package com.helaedu.website.controller;

import com.helaedu.website.dto.StudentDto;
import com.helaedu.website.service.StudentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/students")
@CrossOrigin(origins = "*")
public class StudentController {
    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @PostMapping("/create")
    public ResponseEntity<String> createStudent(@RequestBody StudentDto studentDto) throws ExecutionException, InterruptedException {
        String studentId = studentService.createStudent(studentDto);
        return new ResponseEntity<>(studentId, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<StudentDto>> getAllStudents() throws ExecutionException, InterruptedException {
        List<StudentDto> students = studentService.getAllStudents();
        return ResponseEntity.ok(students);
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

    @PutMapping("/{userId}")
    public ResponseEntity<String> updateStudent(@PathVariable String userId, @RequestBody StudentDto studentDto) throws ExecutionException, InterruptedException {
        String result = studentService.updateStudent(userId, studentDto);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<String> deleteStudent(@PathVariable String userId) throws ExecutionException, InterruptedException {
        String result = studentService.deleteStudent(userId);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
