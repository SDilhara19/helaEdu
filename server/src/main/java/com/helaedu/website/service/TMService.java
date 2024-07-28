package com.helaedu.website.service;

import com.helaedu.website.dto.TeacherDto;
import com.helaedu.website.entity.Student;
import com.helaedu.website.entity.Teacher;
import com.helaedu.website.repository.TMRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.concurrent.ExecutionException;

@Service
public class TMService {
    private final TMRepository tmRepository;

    @Autowired
    private final FirebaseStorageService firebaseStorageService;

    public TMService(TMRepository tmRepository, FirebaseStorageService firebaseStorageService) {
        this.tmRepository = tmRepository;
        this.firebaseStorageService = firebaseStorageService;
    }

    public TeacherDto getTM(String userId) throws ExecutionException, InterruptedException {
        Teacher tm = tmRepository.getTMById(userId);
        if (tm != null) {
            return new TeacherDto(
                    userId,
                    tm.getFirstName(),
                    tm.getLastName(),
                    tm.getEmail(),
                    tm.getPassword(),
                    tm.getRegTimestamp(),
                    tm.getIsModerator(),
                    tm.getProofRef(),
                    tm.getRole(),
                    tm.isEmailVerified(),
                    tm.getProfilePictureUrl(),
                    tm.isApproved(),
                    tm.getAbout(),
                    tm.getPreferredSubjects(),
                    tm.getSchool()
            );
        }
        return null;
    }

    public TeacherDto getTMByEmail(String email) throws ExecutionException, InterruptedException {
        Teacher tm = tmRepository.getTMByEmail(email);
        if (tm != null) {
            return new TeacherDto(
                    tm.getUserId(),
                    tm.getFirstName(),
                    tm.getLastName(),
                    tm.getEmail(),
                    tm.getPassword(),
                    tm.getRegTimestamp(),
                    tm.getIsModerator(),
                    tm.getProofRef(),
                    tm.getRole(),
                    tm.isEmailVerified(),
                    tm.getProfilePictureUrl(),
                    tm.isApproved(),
                    tm.getAbout(),
                    tm.getPreferredSubjects(),
                    tm.getSchool()
            );
        }
        return null;
    }

    public String uploadProfilePicture(String email, MultipartFile profilePicture) throws IOException, ExecutionException, InterruptedException {
        Teacher tm = tmRepository.getTMByEmail(email);

        String profilePictureUrl = firebaseStorageService.uploadProfilePicture(profilePicture, email);

        if(tm != null) {
            tm.setProfilePictureUrl(profilePictureUrl);
            tmRepository.updateTMByEmail(email, tm);
        } else {
            throw new IllegalArgumentException("Teacher or moderator not found");
        }
        return profilePictureUrl;
    }

    public void deleteProfilePicture(String email) throws IOException, ExecutionException, InterruptedException {
        Teacher tm = tmRepository.getTMByEmail(email);

        if (tm != null) {
            String profilePictureUrl = tm.getProfilePictureUrl();
            if (profilePictureUrl != null && !profilePictureUrl.isEmpty()) {
                firebaseStorageService.deleteProfilePicture(profilePictureUrl);
                tm.setProfilePictureUrl(null);
                tmRepository.updateTMByEmail(email, tm);
            } else {
                throw new IllegalArgumentException("No profile picture to delete");
            }
        } else {
            throw new IllegalArgumentException("Teacher or moderator not found");
        }
    }
}
