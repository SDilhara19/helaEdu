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
    public String uploadProfilePicture(MultipartFile file, String email) throws IOException {
        String blobName = "profile_pictures/" + email + "/" + UUID.randomUUID() + "-" + file.getOriginalFilename();
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

    public String uploadArticleCover(MultipartFile file, String articleId) throws IOException {
        String blobName = "article_cover_images/" + articleId + "/" + UUID.randomUUID() + "-" + file.getOriginalFilename();
        BlobInfo blobInfo = BlobInfo.newBuilder("helaedu-website.appspot.com", blobName).build();
        try {
            storage.create(blobInfo, file.getBytes());
            storage.createAcl(blobInfo.getBlobId(), Acl.of(Acl.User.ofAllUsers(), Acl.Role.READER));
            return String.format("https://storage.googleapis.com/%s/%s", "helaedu-website.appspot.com", blobName);
        } catch (StorageException e) {
            System.out.println("Error uploading file to Google Cloud Storage: " + e.getMessage());
            throw e;
        }
    }
}
