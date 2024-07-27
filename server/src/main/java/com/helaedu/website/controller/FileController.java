package com.helaedu.website.controller;

import com.helaedu.website.dto.TeacherDto;
import com.helaedu.website.service.TeacherService;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpHeaders;
import com.helaedu.website.service.FirebaseStorageService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Map;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/files")
@CrossOrigin(origins = "*")
public class FileController {

    private final FirebaseStorageService firebaseStorageService;
    private final TeacherService teacherService;

    public FileController(FirebaseStorageService firebaseStorageService, TeacherService teacherService) {
        this.firebaseStorageService = firebaseStorageService;
        this.teacherService = teacherService;
    }

    @GetMapping("/teacher-proof")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Resource> getTeacherProof(@RequestBody Map<String, String> requestBody) throws IOException, ExecutionException, InterruptedException {
        String email = requestBody.get("email");
        TeacherDto teacher = teacherService.getTeacherByEmail(email);
        if (teacher == null || teacher.getProofRef() == null) {
            throw new IllegalArgumentException("Teacher or proof file not found");
        }

        String proofFileName = teacher.getProofRef();
        Resource resource = firebaseStorageService.getFileAsResource(proofFileName);

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType("application/octet-stream"))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
                .body(resource);
    }
}
