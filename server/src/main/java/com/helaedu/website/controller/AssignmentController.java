package com.helaedu.website.controller;

import com.helaedu.website.dto.*;
import com.helaedu.website.dto.AssignmentDto;
import com.helaedu.website.service.AssignmentService;
import com.helaedu.website.service.TMService;
import com.helaedu.website.service.TeacherService;
import com.helaedu.website.util.UserUtil;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/assignments")
@CrossOrigin(origins = "*")
public class AssignmentController {
    private final AssignmentService assignmentService;
    private final TMService tmService;

    public AssignmentController(AssignmentService assignmentService, TMService tmService){
        this.assignmentService = assignmentService;
        this.tmService = tmService;
    }
    @PostMapping("/create")
    public ResponseEntity<Object> createAssignment(@Valid @RequestBody AssignmentDto assignmentDto, BindingResult bindingResult) throws ExecutionException, InterruptedException {
        if (bindingResult.hasErrors()) {
            ValidationErrorResponse errorResponse = new ValidationErrorResponse();
            for(FieldError fieldError : bindingResult.getFieldErrors()) {
                errorResponse.addViolation(fieldError.getField(), fieldError.getDefaultMessage());
            }
            return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
        }
        try {
            String email = UserUtil.getCurrentUserEmail();
            String userId = tmService.getTMByEmail(email).getUserId();
            String assignmentId= assignmentService.createAssignment(userId, assignmentDto);
            return new ResponseEntity<>(assignmentId, HttpStatus.CREATED);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping
    public ResponseEntity<Object> getAllAssignments() throws ExecutionException, InterruptedException{
        List<AssignmentDto> assignments = assignmentService.getAllAssignments();
        return ResponseEntity.ok(assignments);
    }

    @GetMapping("/{assignmentId}")
    public ResponseEntity<Object> getAssignment(@PathVariable String assignmentId) throws ExecutionException, InterruptedException {
        AssignmentDto assignmentDto = assignmentService.getAssignment(assignmentId);
        if (assignmentDto != null) {
            return ResponseEntity.ok(assignmentDto);
        } else {
            ValidationErrorResponse errorResponse = new ValidationErrorResponse();
            errorResponse.addViolation("assignmentId", "Assignment not found");
            return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/tm/{userId}")
    public ResponseEntity<Object> getAssignmentsByTM(@PathVariable String userId) throws ExecutionException, InterruptedException {
        List<AssignmentDto> assignments = assignmentService.getAssignmentsByTM(userId);
        return ResponseEntity.ok(assignments);
    }

    @PostMapping("/{assignmentId}/quizzes")
    public String addQuizzesToAssignment(@PathVariable String assignmentId, @RequestBody List<AssignmentQuizDto> quizzes) throws ExecutionException, InterruptedException {
        return assignmentService.addQuizzesToAssignment(assignmentId, quizzes);
    }
}
