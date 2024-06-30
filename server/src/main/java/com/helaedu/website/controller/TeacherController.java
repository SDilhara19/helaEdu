package com.helaedu.website.controller;

import com.helaedu.website.dto.ArticleDto;
import com.helaedu.website.dto.TeacherDto;
import com.helaedu.website.dto.ValidationErrorResponse;
import com.helaedu.website.service.ArticleService;
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
@RequestMapping("/teachers")
@CrossOrigin(origins = "*")
public class TeacherController {
    private final TeacherService teacherService;
    private final ArticleService articleService;

    public TeacherController(TeacherService teacherService, ArticleService articleService) {
        this.teacherService = teacherService;
        this.articleService = articleService;
    }

    @PostMapping("/create")
    public ResponseEntity<Object> createTeacher(@Valid @RequestBody TeacherDto teacherDto, BindingResult bindingResult) throws ExecutionException, InterruptedException {
        if (bindingResult.hasErrors()) {
            ValidationErrorResponse errorResponse = new ValidationErrorResponse();
            for(FieldError fieldError : bindingResult.getFieldErrors()) {
                errorResponse.addViolation(fieldError.getField(), fieldError.getDefaultMessage());
            }
            return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
        }
        try {
            String teacherId = teacherService.createTeacher(teacherDto);
            return new ResponseEntity<>(teacherId, HttpStatus.CREATED);
        } catch (IllegalArgumentException e) {
            ValidationErrorResponse errorResponse = new ValidationErrorResponse();
            errorResponse.addViolation("email", e.getMessage());
            return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
        } catch (ExecutionException | InterruptedException e) {
            return new ResponseEntity<>("Error creating teacher", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping
    public ResponseEntity<List<TeacherDto>> getAllTeachers() throws ExecutionException, InterruptedException {
        List<TeacherDto> teachers = teacherService.getAllTeachers();
        return ResponseEntity.ok(teachers);
    }

    @GetMapping("/{userId}")
    public ResponseEntity<Object> getTeacher(@PathVariable String userId) throws ExecutionException, InterruptedException {
        TeacherDto teacherDto = teacherService.getTeacher(userId);
        if (teacherDto != null) {
            return ResponseEntity.ok(teacherDto);
        } else {
            ValidationErrorResponse errorResponse = new ValidationErrorResponse();
            errorResponse.addViolation("userId", "Teacher not found");
            return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{userId}")
    public ResponseEntity<Object> updateTeacher(@PathVariable String userId, @Valid @RequestBody TeacherDto teacherDto, BindingResult bindingResult) throws ExecutionException, InterruptedException {
        if(bindingResult.hasErrors()) {
            ValidationErrorResponse errorResponse = new ValidationErrorResponse();
            for (FieldError fieldError : bindingResult.getFieldErrors()) {
                errorResponse.addViolation(fieldError.getField(), fieldError.getDefaultMessage());
            }
            return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
        }
        try {
            String result = teacherService.updateTeacher(userId, teacherDto);
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            ValidationErrorResponse errorResponse = new ValidationErrorResponse();
            errorResponse.addViolation("userId", e.getMessage());
            return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
        } catch (ExecutionException | InterruptedException e) {
            return new ResponseEntity<>("Error updating teacher", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<Object> deleteTeacher(@PathVariable String userId) throws ExecutionException, InterruptedException {
        try {
            String result = teacherService.deleteTeacher(userId);
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            ValidationErrorResponse errorResponse = new ValidationErrorResponse();
            errorResponse.addViolation("userId", e.getMessage());
            return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
        } catch (ExecutionException | InterruptedException e) {
            return new ResponseEntity<>("Error deleting teacher", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{userId}/promote")
    public ResponseEntity<Object> promoteToModerator(@PathVariable String userId) throws ExecutionException, InterruptedException {
        try {
            String result = teacherService.promoteToModerator(userId);
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            ValidationErrorResponse errorResponse = new ValidationErrorResponse();
            errorResponse.addViolation("userId", e.getMessage());
            return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
        } catch (ExecutionException | InterruptedException e) {
            return new ResponseEntity<>("Error promoting teacher to moderator", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{userId}/articles")
    public ResponseEntity<List<ArticleDto>> getAllArticledByTeacher(@PathVariable String userId) throws ExecutionException, InterruptedException {
        List<ArticleDto> articles = articleService.getArticlesByUser(userId);
        return ResponseEntity.ok(articles);
    }

    @GetMapping("/me")
    public ResponseEntity<Object> getCurrentTeacher() throws ExecutionException, InterruptedException {
        String userId = UserUtil.getCurrentUserId();
        return getTeacher(userId);
    }

    @PutMapping("/me")
    public ResponseEntity<Object> updateCurrentTeacher(@Valid @RequestBody TeacherDto teacherDto, BindingResult bindingResult) throws ExecutionException, InterruptedException {
        String userId = UserUtil.getCurrentUserId();
        return updateTeacher(userId, teacherDto, bindingResult);
    }

    @DeleteMapping("/me")
    public ResponseEntity<Object> deleteCurrentTeacher() throws ExecutionException, InterruptedException {
        String userId = UserUtil.getCurrentUserId();
        return deleteTeacher(userId);
    }

    @GetMapping("/me/articles")
    public ResponseEntity<List<ArticleDto>> getCurrentTeacherArticles() throws ExecutionException, InterruptedException {
        String userId = UserUtil.getCurrentUserId();
        return getAllArticledByTeacher(userId);
    }
}
