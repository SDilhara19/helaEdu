package com.helaedu.website.controller;

import com.google.firebase.auth.FirebaseAuthException;
import com.helaedu.website.dto.ArticleDto;
import com.helaedu.website.dto.TeacherDto;
import com.helaedu.website.dto.ValidationErrorResponse;
import com.helaedu.website.service.ArticleService;
import com.helaedu.website.service.ModeratorService;
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
@RequestMapping("/moderators")
@CrossOrigin(origins = "*")
public class ModeratorController {
    private final ModeratorService moderatorService;
    private final ArticleService articleService;

    public ModeratorController(ModeratorService moderatorService, ArticleService articleService) {
        this.moderatorService = moderatorService;
        this.articleService = articleService;
    }

    @PostMapping("/create")
    public ResponseEntity<Object> createModerator(@Valid @RequestBody TeacherDto teacherDto, BindingResult bindingResult) throws ExecutionException, InterruptedException {
        if (bindingResult.hasErrors()) {
            ValidationErrorResponse errorResponse = new ValidationErrorResponse();
            for(FieldError fieldError : bindingResult.getFieldErrors()) {
                errorResponse.addViolation(fieldError.getField(), fieldError.getDefaultMessage());
            }
            return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
        }
        try {
            String moderatorId = moderatorService.createModerator(teacherDto);
            return new ResponseEntity<>(moderatorId, HttpStatus.CREATED);
        } catch (IllegalArgumentException e) {
            ValidationErrorResponse errorResponse = new ValidationErrorResponse();
            errorResponse.addViolation("email", e.getMessage());
            return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
        } catch (ExecutionException | InterruptedException e) {
            return new ResponseEntity<>("Error creating moderator", HttpStatus.INTERNAL_SERVER_ERROR);
        } catch (FirebaseAuthException e) {
            throw new RuntimeException(e);
        }
    }

    @GetMapping
    public ResponseEntity<List<TeacherDto>> getAllModerators() throws ExecutionException, InterruptedException {
        List<TeacherDto> moderators = moderatorService.getAllModerators();
        return ResponseEntity.ok(moderators);
    }

    @PutMapping("/{userId}/demote")
    public ResponseEntity<Object> demoteToTeacher(@PathVariable String userId) throws ExecutionException, InterruptedException {
        try {
            String result = moderatorService.demoteToTeacher(userId);
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            ValidationErrorResponse errorResponse = new ValidationErrorResponse();
            errorResponse.addViolation("userId", e.getMessage());
            return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
        } catch (ExecutionException | InterruptedException e) {
            return new ResponseEntity<>("Error demoting moderator to teacher", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{userId}")
    public ResponseEntity<Object> getModerator(@PathVariable String userId) throws ExecutionException, InterruptedException {
        TeacherDto teacherDto = moderatorService.getModerator(userId);
        if (teacherDto != null) {
            return ResponseEntity.ok(teacherDto);
        } else {
            ValidationErrorResponse errorResponse = new ValidationErrorResponse();
            errorResponse.addViolation("userId", "Moderator not found");
            return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{userId}")
    public ResponseEntity<Object> updateModerator(@PathVariable String userId, @Valid @RequestBody TeacherDto teacherDto, BindingResult bindingResult) throws ExecutionException, InterruptedException {
        if(bindingResult.hasErrors()) {
            ValidationErrorResponse errorResponse = new ValidationErrorResponse();
            for (FieldError fieldError : bindingResult.getFieldErrors()) {
                errorResponse.addViolation(fieldError.getField(), fieldError.getDefaultMessage());
            }
            return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
        }
        try {
            String result = moderatorService.updateModerator(userId, teacherDto);
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            ValidationErrorResponse errorResponse = new ValidationErrorResponse();
            errorResponse.addViolation("userId", e.getMessage());
            return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
        } catch (ExecutionException | InterruptedException e) {
            return new ResponseEntity<>("Error updating moderator", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<Object> deleteModerator(@PathVariable String userId) throws ExecutionException, InterruptedException {
        try {
            String result = moderatorService.deleteModerator(userId);
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            ValidationErrorResponse errorResponse = new ValidationErrorResponse();
            errorResponse.addViolation("userId", e.getMessage());
            return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
        } catch (ExecutionException | InterruptedException e) {
            return new ResponseEntity<>("Error deleting moderator", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{userId}/articles")
    public ResponseEntity<List<ArticleDto>> getAllArticledByModerator(@PathVariable String userId) throws ExecutionException, InterruptedException {
        List<ArticleDto> articles = articleService.getArticlesByUser(userId);
        return ResponseEntity.ok(articles);
    }

    @GetMapping("/verify-email")
    public ResponseEntity<String> verifyEmail(@RequestParam String uid) {
        try {
            moderatorService.verifyEmail(uid);
            return new ResponseEntity<>("Email verified successfully", HttpStatus.OK);
        } catch (IllegalArgumentException | ExecutionException | InterruptedException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (FirebaseAuthException e) {
            throw new RuntimeException(e);
        }
    }

    @GetMapping("/me")
    public ResponseEntity<Object> getCurrentModerator() throws ExecutionException, InterruptedException {
        String userId = UserUtil.getCurrentUserEmail();
        return getModerator(userId);
    }

    @PutMapping("/me")
    public ResponseEntity<Object> updateCurrentModerator(@Valid @RequestBody TeacherDto teacherDto, BindingResult bindingResult) throws ExecutionException, InterruptedException {
        String userId = UserUtil.getCurrentUserEmail();
        return updateModerator(userId, teacherDto, bindingResult);
    }

    @DeleteMapping("/me")
    public ResponseEntity<Object> deleteCurrentModerator() throws ExecutionException, InterruptedException {
        String userId = UserUtil.getCurrentUserEmail();
        return deleteModerator(userId);
    }

    @GetMapping("/me/articles")
    public ResponseEntity<List<ArticleDto>> getCurrentModeratorArticles() throws ExecutionException, InterruptedException {
        String userId = UserUtil.getCurrentUserEmail();
        return getAllArticledByModerator(userId);
    }
}
