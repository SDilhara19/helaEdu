package com.helaedu.website.service;

import com.google.cloud.storage.Acl;
import com.google.cloud.storage.BlobInfo;
import com.google.cloud.storage.Storage;
import com.google.cloud.storage.StorageException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.UUID;
@Service
public class FirebaseStorageService {
    private final Storage storage;

    @Autowired
    public FirebaseStorageService(Storage storage) {
        this.storage = storage;
    }

    private String uploadFile(MultipartFile file, String pathPrefix) throws IOException {
        String blobName = pathPrefix + "/" + UUID.randomUUID() + "-" + file.getOriginalFilename();
        BlobInfo blobInfo = BlobInfo.newBuilder("helaedu-website.appspot.com", blobName).build();
        try {
            storage.create(blobInfo, file.getBytes());
            storage.createAcl(blobInfo.getBlobId(), Acl.of(Acl.User.ofAllUsers(), Acl.Role.READER));
            return String.format("https://storage.googleapis.com/%s/%s", "helaedu-website.appspot.com", blobName);
        } catch (StorageException e) {
            System.err.println("Error uploading file to Google Cloud Storage: " + e.getMessage());
            throw e;
        }
    }

    public String uploadProfilePicture(MultipartFile file, String email) throws IOException {
        return uploadFile(file, "profile_pictures/" + email);
    }

    public String uploadArticleCover(MultipartFile file, String articleId) throws IOException {
        return uploadFile(file, "article_cover_images/" + articleId);
    }

    public String uploadAdditionalFile(MultipartFile file, String articleId) throws IOException {
        return uploadFile(file, "article_additional_files/" + articleId);
    }

    public String uploadTeacherProof(MultipartFile file, String email) throws IOException {
        return uploadFile(file, "teacher_proofs/" + email);
    }
}
