package com.helaedu.website.controller;

import com.google.firebase.auth.FirebaseAuthException;
import com.helaedu.website.dto.ArticleDto;
import com.helaedu.website.dto.StudentDto;
import com.helaedu.website.dto.TeacherDto;
import com.helaedu.website.dto.ValidationErrorResponse;
import com.helaedu.website.service.ArticleService;
import com.helaedu.website.service.TeacherService;
import com.helaedu.website.util.RequestUtil;
import com.helaedu.website.util.UserUtil;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
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
        } catch (FirebaseAuthException e) {
            throw new RuntimeException(e);
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

    //todo
    @GetMapping("/tm/{userId}")
    public ResponseEntity<Object> getTM(@PathVariable String userId) throws ExecutionException, InterruptedException {
        TeacherDto teacherDto = teacherService.getTM(userId);
        if (teacherDto != null) {
            return ResponseEntity.ok(teacherDto);
        } else {
            ValidationErrorResponse errorResponse = new ValidationErrorResponse();
            errorResponse.addViolation("userId", "Teacher or moderator not found");
            return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/by-email")
    public ResponseEntity<Object> getTeacherByEmail(@RequestBody Map<String, String> requestBody) throws ExecutionException, InterruptedException {
        String email = requestBody.get("email");
        TeacherDto teacher = teacherService.getTeacherByEmail(email);
        if (teacher != null) {
            return ResponseEntity.ok(teacher);
        }
        ValidationErrorResponse errorResponse = new ValidationErrorResponse();
        errorResponse.addViolation("email", "Email not found");
        return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
    }

    @PutMapping("/update-by-email")
    @PreAuthorize("#teacherDto.email == authentication.principal.username")
    public ResponseEntity<Object> updateTeacher(@Valid @RequestBody TeacherDto teacherDto, BindingResult bindingResult) throws ExecutionException, InterruptedException {
        if(bindingResult.hasErrors()) {
            ValidationErrorResponse errorResponse = new ValidationErrorResponse();
            for (FieldError fieldError : bindingResult.getFieldErrors()) {
                errorResponse.addViolation(fieldError.getField(), fieldError.getDefaultMessage());
            }
            return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
        }
        try {
            String result = teacherService.updateTeacher(teacherDto.getEmail(), teacherDto);
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

    @GetMapping("/articles")
    public ResponseEntity<List<ArticleDto>> getAllArticledByTeacher(@RequestBody Map<String, String> requestBody) throws ExecutionException, InterruptedException {
        String email = requestBody.get("email");
        TeacherDto teacherDto = teacherService.getTeacherByEmail(email);
        List<ArticleDto> articles = articleService.getArticlesByUser(teacherDto.getUserId());
        return ResponseEntity.ok(articles);
    }

    @GetMapping("/verify-email")
    public ResponseEntity<String> verifyEmail(@RequestParam String uid) {
        try {
            teacherService.verifyEmail(uid);
            return new ResponseEntity<>("Email verified successfully", HttpStatus.OK);
        } catch (IllegalArgumentException | ExecutionException | InterruptedException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (FirebaseAuthException e) {
            throw new RuntimeException(e);
        }
    }

    @GetMapping("/me")
    public ResponseEntity<Object> getCurrentTeacher() throws ExecutionException, InterruptedException {
        String email = UserUtil.getCurrentUserEmail();
        Map<String, String> requestBody = RequestUtil.createEmailRequestBody(email);
        return getTeacherByEmail(requestBody);
    }

    @PutMapping("/me")
    public ResponseEntity<Object> updateCurrentTeacher(@Valid @RequestBody TeacherDto teacherDto, BindingResult bindingResult) throws ExecutionException, InterruptedException {
        return updateTeacher(teacherDto, bindingResult);
    }

    @DeleteMapping("/me")
    public ResponseEntity<Object> deleteCurrentTeacher() throws ExecutionException, InterruptedException {
        String email = UserUtil.getCurrentUserEmail();
        return deleteTeacher(email);
    }

    @GetMapping("/me/articles")
    public ResponseEntity<List<ArticleDto>> getCurrentTeacherArticles() throws ExecutionException, InterruptedException {
        String email = UserUtil.getCurrentUserEmail();
        Map<String, String> requestBody = RequestUtil.createEmailRequestBody(email);
        return getAllArticledByTeacher(requestBody);
    }
}
