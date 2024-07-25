package com.helaedu.website.controller;

import com.google.firebase.auth.FirebaseAuthException;
import com.helaedu.website.dto.*;
import com.helaedu.website.service.NoteService;
import com.helaedu.website.service.StudentService;
import com.helaedu.website.service.SubscriptionService;
import com.helaedu.website.util.UserUtil;
import com.helaedu.website.util.RequestUtil;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/students")
@CrossOrigin(origins = "*")
public class StudentController {
    private final StudentService studentService;
    private final NoteService noteService;
    private final SubscriptionService subscriptionService;

    public StudentController(StudentService studentService, NoteService noteService, SubscriptionService subscriptionService) {
        this.studentService = studentService;
        this.noteService = noteService;
        this.subscriptionService = subscriptionService;
    }

    @PostMapping("/create")
    public ResponseEntity<Object> createStudent(@Valid @RequestBody StudentDto studentDto, BindingResult bindingResult) throws ExecutionException, InterruptedException {
        if (bindingResult.hasErrors()) {
            ValidationErrorResponse errorResponse = new ValidationErrorResponse();
            for(FieldError fieldError : bindingResult.getFieldErrors()) {
                errorResponse.addViolation(fieldError.getField(), fieldError.getDefaultMessage());
            }
            return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
        }
        try {
            String studentId = studentService.createStudent(studentDto);
            return new ResponseEntity<>(studentId, HttpStatus.CREATED);
        } catch (IllegalArgumentException e) {
            ValidationErrorResponse errorResponse = new ValidationErrorResponse();
            errorResponse.addViolation("email", e.getMessage());
            return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
        } catch (ExecutionException | InterruptedException e) {
            return new ResponseEntity<>("Error creating student", HttpStatus.INTERNAL_SERVER_ERROR);
        } catch (FirebaseAuthException e) {
            throw new RuntimeException(e);
        }
    }

    @PostMapping("/uploadProfilePicture")
    public ResponseEntity<Object> uploadProfilePicture(@RequestParam String email, @RequestParam("profilePicture") MultipartFile profilePicture) {
        try {
            String profilePictureUrl = studentService.uploadProfilePicture(email, profilePicture);
            return new ResponseEntity<>(profilePictureUrl, HttpStatus.OK);
        } catch (IOException e) {
            return new ResponseEntity<>("Error uploading profile picture", HttpStatus.INTERNAL_SERVER_ERROR);
        } catch (ExecutionException | InterruptedException e) {
            throw new RuntimeException(e);
        }
    }

//    @GetMapping
//    public ResponseEntity<List<StudentDto>> getAllStudents() throws ExecutionException, InterruptedException {
//        List<StudentDto> students = studentService.getAllStudents();
//        return ResponseEntity.ok(students);
//    }

    @GetMapping
    public ResponseEntity<List<StudentDto>> getAllStudents(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) throws ExecutionException, InterruptedException {
        List<StudentDto> students = studentService.getAllStudents(page, size);
        return ResponseEntity.ok(students);
    }

    @GetMapping("/{userId}")
    public ResponseEntity<Object> getStudent(@PathVariable String userId) throws ExecutionException, InterruptedException {
        StudentDto studentDto = studentService.getStudent(userId);
        if (studentDto != null) {
            return ResponseEntity.ok(studentDto);
        } else {
            ValidationErrorResponse errorResponse = new ValidationErrorResponse();
            errorResponse.addViolation("userId", "Student not found");
            return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/by-email")
    public ResponseEntity<Object> getStudentByEmail(@RequestBody Map<String, String> requestBody) throws ExecutionException, InterruptedException {
        String email = requestBody.get("email");
        StudentDto student = studentService.getStudentByEmail(email);
        if (student != null) {
            return ResponseEntity.ok(student);
        }
        ValidationErrorResponse errorResponse = new ValidationErrorResponse();
        errorResponse.addViolation("email", "Email not found");
        return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
    }

    @PutMapping("/update-by-email")
    @PreAuthorize("#studentDto.email == authentication.principal.username")
    public ResponseEntity<Object> updateStudent(@Valid @RequestBody StudentDto studentDto, BindingResult bindingResult) throws ExecutionException, InterruptedException {
        if(bindingResult.hasErrors()) {
            ValidationErrorResponse errorResponse = new ValidationErrorResponse();
            for (FieldError fieldError : bindingResult.getFieldErrors()) {
                errorResponse.addViolation(fieldError.getField(), fieldError.getDefaultMessage());
            }
            return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
        }
        try {
            String result = studentService.updateStudentByEmail(studentDto.getEmail(), studentDto);
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            ValidationErrorResponse errorResponse = new ValidationErrorResponse();
            errorResponse.addViolation("userId", e.getMessage());
            return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
        } catch (ExecutionException | InterruptedException e) {
            return new ResponseEntity<>("Error updating student", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<Object> deleteStudent(@PathVariable String userId) throws ExecutionException, InterruptedException {
        try {
            String result = studentService.deleteStudent(userId);
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            ValidationErrorResponse errorResponse = new ValidationErrorResponse();
            errorResponse.addViolation("userId", e.getMessage());
            return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
        } catch (ExecutionException | InterruptedException e) {
            return new ResponseEntity<>("Error deleting student", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping
    @PreAuthorize("#requestBody.email == authentication.principal.username")
    public ResponseEntity<Object> deleteStudentByEmail(@RequestBody Map<String, String> requestBody) throws ExecutionException, InterruptedException {
        try {
            String email = requestBody.get("email");
            String result = studentService.deleteStudentByEmail(email);
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            ValidationErrorResponse errorResponse = new ValidationErrorResponse();
            errorResponse.addViolation("email", e.getMessage());
            return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
        } catch (ExecutionException | InterruptedException e) {
            return new ResponseEntity<>("Error deleting student", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{userId}/note")
    public ResponseEntity<Object> getNote(@PathVariable String userId) throws ExecutionException, InterruptedException {
        StudentDto studentDto = studentService.getStudent(userId);
        NoteDto noteDto = noteService.getNote(studentDto.getNoteId());
        if (noteDto != null) {
            return ResponseEntity.ok(noteDto);
        } else {
            ValidationErrorResponse errorResponse = new ValidationErrorResponse();
            errorResponse.addViolation("userId", "Student not found");
            return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/note-by-email")
    @PreAuthorize("#requestBody.email == authentication.principal.username")
    public ResponseEntity<Object> getNoteByEmail(@RequestBody Map<String, String> requestBody) throws ExecutionException, InterruptedException {
        String email = requestBody.get("email");
        StudentDto studentDto = studentService.getStudentByEmail(email);
        NoteDto noteDto = noteService.getNote(studentDto.getNoteId());
        if (noteDto != null) {
            return ResponseEntity.ok(noteDto);
        } else {
            ValidationErrorResponse errorResponse = new ValidationErrorResponse();
            errorResponse.addViolation("email", "Email not found");
            return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{userId}/note")
    public ResponseEntity<Object> updateNote(@PathVariable String userId, @Valid @RequestBody NoteDto noteDto, BindingResult bindingResult) throws ExecutionException, InterruptedException {
        if(bindingResult.hasErrors()) {
            ValidationErrorResponse errorResponse = new ValidationErrorResponse();
            for (FieldError fieldError : bindingResult.getFieldErrors()) {
                errorResponse.addViolation(fieldError.getField(), fieldError.getDefaultMessage());
            }
            return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
        }
        try {
            String result = noteService.updateNote(studentService.getStudent(userId).getNoteId(), noteDto);
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            ValidationErrorResponse errorResponse = new ValidationErrorResponse();
            errorResponse.addViolation("userId", e.getMessage());
            return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
        } catch (ExecutionException | InterruptedException e) {
            return new ResponseEntity<>("Error updating note", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/note-by-email")
    @PreAuthorize("#noteUpdateRequest.email == authentication.principal.username")
    public ResponseEntity<Object> updateNoteByEmail(@Valid @RequestBody NoteUpdateRequest noteUpdateRequest, BindingResult bindingResult) throws ExecutionException, InterruptedException {
        if(bindingResult.hasErrors()) {
            ValidationErrorResponse errorResponse = new ValidationErrorResponse();
            for (FieldError fieldError : bindingResult.getFieldErrors()) {
                errorResponse.addViolation(fieldError.getField(), fieldError.getDefaultMessage());
            }
            return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
        }

        String email = noteUpdateRequest.getEmail();
        NoteDto noteDto = noteUpdateRequest.getNoteDto();

        try {
            String result = noteService.updateNote(studentService.getStudentByEmail(email).getNoteId(), noteDto);
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            ValidationErrorResponse errorResponse = new ValidationErrorResponse();
            errorResponse.addViolation("email", e.getMessage());
            return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
        } catch (ExecutionException | InterruptedException e) {
            return new ResponseEntity<>("Error updating note", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @PostMapping("/{userId}/subscribe")
    public ResponseEntity<Object> subscribeStudent(@PathVariable String userId, @RequestParam long paidAmount) throws ExecutionException, InterruptedException {
        try {
            String subscriptionId = studentService.createSubscription(userId, paidAmount);
            return new ResponseEntity<>(subscriptionId, HttpStatus.CREATED);
        } catch (IllegalArgumentException e) {
            ValidationErrorResponse errorResponse = new ValidationErrorResponse();
            errorResponse.addViolation("userId", e.getMessage());
            return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
        } catch (ExecutionException | InterruptedException e) {
            return new ResponseEntity<>("Error creating subscription", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/subscribe-by-email")
    public ResponseEntity<Object> subscribeStudentByEmail(@RequestBody Map<String, String> requestBody) throws ExecutionException, InterruptedException {
        try {
            String email = requestBody.get("email");
            long paidAmount = Long.parseLong(requestBody.get("paidAmount"));
            String subscriptionId = studentService.createSubscriptionByEmail(email, paidAmount);
            return new ResponseEntity<>(subscriptionId, HttpStatus.CREATED);
        } catch (IllegalArgumentException e) {
            ValidationErrorResponse errorResponse = new ValidationErrorResponse();
            errorResponse.addViolation("userId", e.getMessage());
            return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
        } catch (ExecutionException | InterruptedException e) {
            return new ResponseEntity<>("Error creating subscription", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{userId}/unsubscribe")
    public ResponseEntity<Object> unsubscribeStudent(@PathVariable String userId) throws ExecutionException, InterruptedException {
        StudentDto studentDto = studentService.getStudent(userId);
        if(studentDto == null) {
            ValidationErrorResponse errorResponse = new ValidationErrorResponse();
            errorResponse.addViolation("UserId", "Student not found");
            return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
        }

        String subscriptionId = studentDto.getSubscriptionId();
        if(subscriptionId == null) {
            ValidationErrorResponse errorResponse = new ValidationErrorResponse();
            errorResponse.addViolation("subscriptionId", "No active subscription found for this student");
            return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
        }

        SubscriptionDto subscriptionDto = subscriptionService.getSubscription(subscriptionId);
        if (subscriptionDto == null) {
            ValidationErrorResponse errorResponse = new ValidationErrorResponse();
            errorResponse.addViolation("subscriptionId", "Subscription not found");
            return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
        }

        try {
            studentService.cancelSubscription(userId);
            subscriptionService.cancelSubscription(subscriptionId);
            return new ResponseEntity<>("Unsubscribed successfully", HttpStatus.OK);
        } catch (ExecutionException | InterruptedException e) {
            return new ResponseEntity<>("Error unsubscribing student", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/unsubscribe")
    public ResponseEntity<Object> unsubscribeStudentByEmail(@RequestBody Map<String, String> requestBody) throws ExecutionException, InterruptedException {
        String email = requestBody.get("email");
        StudentDto studentDto = studentService.getStudentByEmail(email);
        if(studentDto == null) {
            ValidationErrorResponse errorResponse = new ValidationErrorResponse();
            errorResponse.addViolation("UserId", "Student not found");
            return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
        }

        String subscriptionId = studentDto.getSubscriptionId();
        if(subscriptionId == null) {
            ValidationErrorResponse errorResponse = new ValidationErrorResponse();
            errorResponse.addViolation("subscriptionId", "No active subscription found for this student");
            return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
        }

        SubscriptionDto subscriptionDto = subscriptionService.getSubscription(subscriptionId);
        if (subscriptionDto == null) {
            ValidationErrorResponse errorResponse = new ValidationErrorResponse();
            errorResponse.addViolation("subscriptionId", "Subscription not found");
            return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
        }

        try {
            studentService.cancelSubscription(studentDto.getUserId());
            subscriptionService.cancelSubscription(subscriptionId);
            return new ResponseEntity<>("Unsubscribed successfully", HttpStatus.OK);
        } catch (ExecutionException | InterruptedException e) {
            return new ResponseEntity<>("Error unsubscribing student", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{userId}/subscription")
    public ResponseEntity<Object> getSubscription(@PathVariable String userId) throws ExecutionException, InterruptedException {
        StudentDto studentDto = studentService.getStudent(userId);
        if(studentDto == null) {
            ValidationErrorResponse errorResponse = new ValidationErrorResponse();
            errorResponse.addViolation("UserId", "Student not found");
            return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
        }

        String subscriptionId = studentDto.getSubscriptionId();
        if (subscriptionId == null || subscriptionId.isEmpty()) {
            ValidationErrorResponse errorResponse = new ValidationErrorResponse();
            errorResponse.addViolation("subscriptionId", "No active subscription found for this student");
            return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
        }

        SubscriptionDto subscriptionDto = subscriptionService.getSubscription(subscriptionId);
        if (subscriptionDto != null) {
            return ResponseEntity.ok(subscriptionDto);
        } else {
            ValidationErrorResponse errorResponse = new ValidationErrorResponse();
            errorResponse.addViolation("subscriptionId", "Subscription not found");
            return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/subscription")
    public ResponseEntity<Object> getSubscriptionByEmail(@RequestBody Map<String, String> requestBody) throws ExecutionException, InterruptedException {
        String email = requestBody.get("email");
        StudentDto studentDto = studentService.getStudentByEmail(email);
        if(studentDto == null) {
            ValidationErrorResponse errorResponse = new ValidationErrorResponse();
            errorResponse.addViolation("Email", "Email not found");
            return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
        }

        String subscriptionId = studentDto.getSubscriptionId();
        if (subscriptionId == null || subscriptionId.isEmpty()) {
            ValidationErrorResponse errorResponse = new ValidationErrorResponse();
            errorResponse.addViolation("subscriptionId", "No active subscription found for this student");
            return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
        }

        SubscriptionDto subscriptionDto = subscriptionService.getSubscription(subscriptionId);
        if (subscriptionDto != null) {
            return ResponseEntity.ok(subscriptionDto);
        } else {
            ValidationErrorResponse errorResponse = new ValidationErrorResponse();
            errorResponse.addViolation("subscriptionId", "Subscription not found");
            return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/active-subscriptions")
    public ResponseEntity<List<StudentDto>> getStudentsWithActiveSubscriptions() throws ExecutionException, InterruptedException {
        List<StudentDto> students = studentService.getStudentsWithActiveSubscriptions();
        return new ResponseEntity<>(students, HttpStatus.OK);
    }

    @GetMapping("/verify-email")
    public ResponseEntity<String> verifyEmail(@RequestParam String uid) {
        try {
            studentService.verifyEmail(uid);
            return new ResponseEntity<>("Email verified successfully", HttpStatus.OK);
        } catch (IllegalArgumentException | ExecutionException | InterruptedException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (FirebaseAuthException e) {
            throw new RuntimeException(e);
        }
    }

    @GetMapping("/me")
    public ResponseEntity<Object> getCurrentStudent() throws ExecutionException, InterruptedException {
        String email = UserUtil.getCurrentUserEmail();
        Map<String, String> requestBody = RequestUtil.createEmailRequestBody(email);
        return getStudentByEmail(requestBody);
    }

    @PutMapping("/me")
    public ResponseEntity<Object> updateCurrentStudent(@Valid @RequestBody StudentDto studentDto, BindingResult bindingResult) throws ExecutionException, InterruptedException {
        return updateStudent(studentDto, bindingResult);
    }

    @DeleteMapping("/me")
    public ResponseEntity<Object> deleteCurrentStudent() throws ExecutionException, InterruptedException {
        String email = UserUtil.getCurrentUserEmail();
        return deleteStudent(email);
    }

    @GetMapping("/me/note")
    public ResponseEntity<Object> getCurrentStudentNote() throws ExecutionException, InterruptedException {
        String email = UserUtil.getCurrentUserEmail();
        Map<String, String> requestBody = RequestUtil.createEmailRequestBody(email);
        return getNoteByEmail(requestBody);
    }

    @PutMapping("/me/note")
    public ResponseEntity<Object> updateCurrentUserNote(@Valid @RequestBody NoteDto noteDto, BindingResult bindingResult) throws ExecutionException, InterruptedException {
        String email = UserUtil.getCurrentUserEmail();
        NoteUpdateRequest noteUpdateRequest = new NoteUpdateRequest(email, noteDto);
        return updateNoteByEmail(noteUpdateRequest, bindingResult);
    }

    @GetMapping("/me/subscription")
    public ResponseEntity<Object> getCurrentStudentSubscription() throws ExecutionException, InterruptedException {
        String email = UserUtil.getCurrentUserEmail();
        Map<String, String> requestBody = RequestUtil.createEmailRequestBody(email);
        return getSubscriptionByEmail(requestBody);
    }

    @PostMapping("/me/subscribe")
    public ResponseEntity<Object> subscribeCurrentStudent(@RequestBody SubscriptionRequest requestBody) throws ExecutionException, InterruptedException {
        String email = UserUtil.getCurrentUserEmail();
        Map<String, String> subscriptionRequestBody = new HashMap<>();
        subscriptionRequestBody.put("email", email);
        subscriptionRequestBody.put("paidAmount", requestBody.getPaidAmount());
        return subscribeStudentByEmail(subscriptionRequestBody);
    }

    @PutMapping("/me/unsubscribe")
    public ResponseEntity<Object> unsubscribeCurrentStudent() throws ExecutionException, InterruptedException {
        String email = UserUtil.getCurrentUserEmail();
        Map<String, String> requestBody = RequestUtil.createEmailRequestBody(email);
        return unsubscribeStudentByEmail(requestBody);
    }

    @PostMapping("/me/uploadProfilePicture")
    public ResponseEntity<Object> uploadProfilePictureCurrentStudent(@RequestParam("profilePicture") MultipartFile profilePicture) throws ExecutionException, InterruptedException {
        String email = UserUtil.getCurrentUserEmail();
        return uploadProfilePicture(email, profilePicture);
    }
}
