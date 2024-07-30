package com.helaedu.website.controller;

import com.helaedu.website.dto.ArticleDto;
import com.helaedu.website.dto.TeacherDto;
import com.helaedu.website.dto.ValidationErrorResponse;
import com.helaedu.website.service.ArticleService;
import com.helaedu.website.service.TMService;
import com.helaedu.website.util.RequestUtil;
import com.helaedu.website.util.UserUtil;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/tm")
@CrossOrigin(origins = "*")
public class TMController {
    private final ArticleService articleService;
    private final TMService tmService;
    public TMController(ArticleService articleService, TMService tmService) {
        this.articleService = articleService;
        this.tmService = tmService;
    }

    @PostMapping("/uploadProfilePicture")
    public ResponseEntity<Object> uploadProfilePicture(@RequestParam String email, @RequestParam("profilePicture") MultipartFile profilePicture) {
        try {
            String profilePictureUrl = tmService.uploadProfilePicture(email, profilePicture);
            return new ResponseEntity<>(profilePictureUrl, HttpStatus.OK);
        } catch (IOException e) {
            return new ResponseEntity<>("Error uploading profile picture", HttpStatus.INTERNAL_SERVER_ERROR);
        } catch (ExecutionException | InterruptedException e) {
            throw new RuntimeException(e);
        }
    }

    @GetMapping("/{userId}/articles")
    public ResponseEntity<List<ArticleDto>> getAllArticlesByUser(@PathVariable String userId) throws ExecutionException, InterruptedException {
        List<ArticleDto> articles = articleService.getArticlesByUser(userId);
        return ResponseEntity.ok(articles);
    }

    @GetMapping("/{userId}")
    public ResponseEntity<Object> getTM(@PathVariable String userId) throws ExecutionException, InterruptedException {
        TeacherDto teacherDto = tmService.getTM(userId);
        if (teacherDto != null) {
            return ResponseEntity.ok(teacherDto);
        } else {
            ValidationErrorResponse errorResponse = new ValidationErrorResponse();
            errorResponse.addViolation("userId", "Teacher or moderator not found");
            return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
        }
    }
    @PostMapping("/by-email")
    public ResponseEntity<Object> getTMByEmail(@RequestBody Map<String, String> requestBody) throws ExecutionException, InterruptedException {
        String email = requestBody.get("email");
        TeacherDto teacher = tmService.getTMByEmail(email);
        if (teacher != null) {
            return ResponseEntity.ok(teacher);
        }
        ValidationErrorResponse errorResponse = new ValidationErrorResponse();
        errorResponse.addViolation("email", "Email not found");
        return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
    }

    @GetMapping("/articles")
    public ResponseEntity<List<ArticleDto>> getAllArticlesByTM(@RequestBody Map<String, String> requestBody) throws ExecutionException, InterruptedException {
        String email = requestBody.get("email");
        TeacherDto teacherDto = tmService.getTMByEmail(email);
        List<ArticleDto> articles = articleService.getArticlesByUser(teacherDto.getUserId());
        return ResponseEntity.ok(articles);
    }

    @PostMapping("/deleteProfilePicture")
    public ResponseEntity<Object> deleteProfilePicture(@RequestBody Map<String, String> requestBody) {
        String email = requestBody.get("email");
        try {
            tmService.deleteProfilePicture(email);
            return new ResponseEntity<>("Profile picture deleted successfully", HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (IOException | ExecutionException | InterruptedException e) {
            return new ResponseEntity<>("Error deleting profile picture", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/pending")
    public ResponseEntity<Object> getPendingTMs() throws ExecutionException, InterruptedException {
        List<TeacherDto> tms = tmService.getPendingTMs();
        return ResponseEntity.ok(tms);
    }

    @GetMapping("/me")
    public ResponseEntity<Object> getCurrentTM() throws ExecutionException, InterruptedException {
        String email = UserUtil.getCurrentUserEmail();
        Map<String, String> requestBody = RequestUtil.createEmailRequestBody(email);
        return getTMByEmail(requestBody);
    }

    @GetMapping("/me/articles")
    public ResponseEntity<List<ArticleDto>> getCurrentTMArticles() throws ExecutionException, InterruptedException {
        String email = UserUtil.getCurrentUserEmail();
        Map<String, String> requestBody = RequestUtil.createEmailRequestBody(email);
        return getAllArticlesByTM(requestBody);
    }

    @PostMapping("/me/uploadProfilePicture")
    public ResponseEntity<Object> uploadProfilePictureCurrentTM(@RequestParam("profilePicture") MultipartFile profilePicture) throws ExecutionException, InterruptedException {
        String email = UserUtil.getCurrentUserEmail();
        return uploadProfilePicture(email, profilePicture);
    }

    @PostMapping("/me/deleteProfilePicture")
    public ResponseEntity<Object> deleteProfilePictureCurrentTM() throws ExecutionException, InterruptedException {
        String email = UserUtil.getCurrentUserEmail();
        Map<String, String> requestBody = RequestUtil.createEmailRequestBody(email);
        return deleteProfilePicture(requestBody);
    }
}
