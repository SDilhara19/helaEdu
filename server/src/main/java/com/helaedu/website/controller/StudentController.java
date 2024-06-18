package com.helaedu.website.controller;

import com.helaedu.website.dto.StudentDto;
import com.helaedu.website.service.StudentService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
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
    public ResponseEntity<String> createStudent(@Valid @RequestBody StudentDto studentDto, BindingResult bindingResult) throws ExecutionException, InterruptedException {
        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(bindingResult.getFieldError().getDefaultMessage(), HttpStatus.BAD_REQUEST);
        }
        try {
            String studentId = studentService.createStudent(studentDto);
            return new ResponseEntity<>(studentId, HttpStatus.CREATED);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (ExecutionException | InterruptedException e) {
            return new ResponseEntity<>("Error creating student", HttpStatus.INTERNAL_SERVER_ERROR);
        }
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
