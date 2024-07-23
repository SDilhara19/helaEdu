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
        Teacher teacher = tmRepository.getTMById(userId);
        if (teacher != null) {
            return new TeacherDto(
                    userId,
                    teacher.getFirstName(),
                    teacher.getLastName(),
                    teacher.getEmail(),
                    teacher.getPassword(),
                    teacher.getRegTimestamp(),
                    teacher.getIsModerator(),
                    teacher.getProofRef(),
                    teacher.getRole(),
                    teacher.isEmailVerified()
            );
        }
        return null;
    }
}
