package com.helaedu.website.service;

import com.helaedu.website.dto.TeacherDto;
import com.helaedu.website.entity.Teacher;
import com.helaedu.website.repository.TMRepository;
import org.springframework.stereotype.Service;

import java.util.concurrent.ExecutionException;

@Service
public class TMService {
    private final TMRepository tmRepository;

    public TMService(TMRepository tmRepository) {
        this.tmRepository = tmRepository;
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
                    tm.isEmailVerified()
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
                    tm.isEmailVerified()
            );
        }
        return null;
    }
}
