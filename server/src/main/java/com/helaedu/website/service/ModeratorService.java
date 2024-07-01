package com.helaedu.website.service;

import com.helaedu.website.repository.ModeratorRepository;
import com.helaedu.website.util.UniqueIdGenerator;
import com.helaedu.website.dto.TeacherDto;
import com.helaedu.website.entity.Teacher;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;
import java.util.concurrent.ExecutionException;
import java.util.stream.Collectors;

@Service
public class ModeratorService {
    private final ModeratorRepository moderatorRepository;

    public ModeratorService(ModeratorRepository moderatorRepository) {
        this.moderatorRepository = moderatorRepository;
    }

    public String createModerator(TeacherDto teacherDto) throws ExecutionException, InterruptedException {
        Teacher existingModeratorOrTeacher = moderatorRepository.getModeratorByEmail(teacherDto.getEmail());
        if (existingModeratorOrTeacher != null) {
            throw new IllegalArgumentException("Email already exists");
        }

        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String userId = UniqueIdGenerator.generateUniqueId("t", moderatorRepository::exists);

        Teacher moderator = new Teacher(
                userId,
                teacherDto.getFirstName(),
                teacherDto.getLastName(),
                teacherDto.getEmail(),
                encoder.encode(teacherDto.getPassword()),
                Instant.now().toString(),
                true,
                teacherDto.getProofRef(),
                "ROLE_MODERATOR"
        );
        teacherDto.setUserId(moderator.getUserId());
        return moderatorRepository.createModerator(moderator);
    }

    public List<TeacherDto> getAllModerators() throws ExecutionException, InterruptedException {
        List<Teacher> moderators = moderatorRepository.getAllModerators();
        return moderators.stream().map(moderator ->
                        new TeacherDto(
                                moderator.getUserId(),
                                moderator.getFirstName(),
                                moderator.getLastName(),
                                moderator.getEmail(),
                                moderator.getPassword(),
                                moderator.getRegTimestamp(),
                                moderator.getIsModerator(),
                                moderator.getProofRef(),
                                moderator.getRole()
                        )
                )
                .collect(Collectors.toList());
    }

    public TeacherDto getModerator(String userId) throws ExecutionException, InterruptedException {
        Teacher moderator = moderatorRepository.getModeratorById(userId);
        if (moderator != null) {
            return new TeacherDto(
                    userId,
                    moderator.getFirstName(),
                    moderator.getLastName(),
                    moderator.getEmail(),
                    moderator.getPassword(),
                    moderator.getRegTimestamp(),
                    moderator.getIsModerator(),
                    moderator.getProofRef(),
                    moderator.getRole()
            );
        }
        return null;
    }

    public String updateModerator(String userId, TeacherDto teacherDto) throws ExecutionException, InterruptedException {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

        Teacher existingModerator = moderatorRepository.getModeratorById(userId);
        if(existingModerator == null || !existingModerator.getIsModerator()) {
            throw new IllegalArgumentException("Moderator not found");
        }

        if(teacherDto.getFirstName() != null && !teacherDto.getFirstName().equals(existingModerator.getFirstName())) {
            existingModerator.setFirstName(teacherDto.getFirstName());
        }
        if(teacherDto.getLastName() != null && !teacherDto.getLastName().equals(existingModerator.getLastName())) {
            existingModerator.setLastName(teacherDto.getLastName());
        }
        if(teacherDto.getEmail() != null && !teacherDto.getEmail().equals(existingModerator.getEmail())) {
            existingModerator.setEmail(teacherDto.getEmail());
        }
        if(teacherDto.getPassword() != null && !(encoder.encode(teacherDto.getPassword()).equals(encoder.encode(existingModerator.getPassword())))) {
            existingModerator.setPassword(encoder.encode(teacherDto.getPassword()));
        }
        if(teacherDto.getRegTimestamp() != null) {
            existingModerator.setRegTimestamp(teacherDto.getRegTimestamp());
        }
        if(teacherDto.getIsModerator() != null) {
            existingModerator.setIsModerator(teacherDto.getIsModerator());
        }
        if(teacherDto.getProofRef() != null && !teacherDto.getProofRef().equals(existingModerator.getProofRef())) {
            existingModerator.setProofRef(teacherDto.getProofRef());
        }
        return moderatorRepository.updateModerator(userId, existingModerator);
    }

    public String deleteModerator(String userId) throws ExecutionException, InterruptedException {
        Teacher existingModerator = moderatorRepository.getModeratorById(userId);
        if (existingModerator == null || !existingModerator.getIsModerator()) {
            throw new IllegalArgumentException("Moderator not found");
        }
        return moderatorRepository.deleteModerator(userId);
    }

    public String demoteToTeacher(String userId) throws ExecutionException, InterruptedException {
        return moderatorRepository.demoteToTeacher(userId);
    }
}
