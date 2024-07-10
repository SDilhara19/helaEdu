package com.helaedu.website.controller;

import com.helaedu.website.dto.AssignmentDto;
import com.helaedu.website.dto.ValidationErrorResponse;
import com.helaedu.website.service.AssignmentService;
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
    public AssignmentController(AssignmentService assignmentService){
        this.assignmentService = assignmentService;
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
            String userId = UserUtil.getCurrentUserEmail();
            assignmentDto.setUserId(userId);
            String assignmentId = assignmentService.createAssignment(assignmentDto);
            return new ResponseEntity<>(assignmentId, HttpStatus.CREATED);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (ExecutionException | InterruptedException e) {
            return new ResponseEntity<>("Error creating assignment", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping
    public ResponseEntity<Object> getAllAssignments() throws ExecutionException, InterruptedException{
        List<AssignmentDto> assignments = assignmentService.getAllAssignments();
        return ResponseEntity.ok(assignments);
    }



}
