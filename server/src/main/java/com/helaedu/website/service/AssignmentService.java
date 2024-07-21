package com.helaedu.website.service;

import com.helaedu.website.dto.AssignmentDto;
import com.helaedu.website.dto.AssignmentQuizDto;
import com.helaedu.website.entity.Assignment;
import com.helaedu.website.repository.AssignmentRepository;
import com.helaedu.website.util.UniqueIdGenerator;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;
import java.util.stream.Collectors;

@Service
public class AssignmentService {
    private final AssignmentRepository assignmentRepository;

    public AssignmentService(AssignmentRepository assignmentRepository) {
        this.assignmentRepository = assignmentRepository;
    }

    public String createAssignment(AssignmentDto assignmentDto) throws ExecutionException, InterruptedException {

        String assignmentId = UniqueIdGenerator.generateUniqueId("as", assignmentRepository::exists);

//        LocalDateTime publishedTimestamp = assignmentDto.getPublishedTimestamp() != null ?
//                assignmentDto.getPublishedTimestamp() :
//                LocalDateTime.now();

        Assignment assignment = new Assignment(
                assignmentId,
                assignmentDto.getTitle(),
                assignmentDto.getDueDate(),
                assignmentDto.getInstructions(),
                assignmentDto.getNoOfQuestions(),
                assignmentDto.getTotalTime(),
                assignmentDto.getPublishedTimestamp(),
                assignmentDto.getUserId(),

                new ArrayList<>()
        );

        return assignmentRepository.createAssignment(assignment);
    }

    public List<AssignmentDto> getAllAssignments() throws ExecutionException, InterruptedException {
        List<Assignment> assignments = assignmentRepository.getAllAssignments();
        return assignments.stream()
                .map(assignment ->
                        new AssignmentDto(
                                assignment.getAssignmentId(),
                                assignment.getTitle(),
                                assignment.getDueDate(),
                                assignment.getInstructions(),
                                assignment.getNoOfQuestions(),
                                assignment.getTotalTime(),
                                assignment.getPublishedTimestamp().toString(),
                                assignment.getUserId(),
                                assignment.getQuizzes().stream()
                                        .map(quiz -> new AssignmentQuizDto(
                                                quiz.getQuizId(),
                                                quiz.getQuestion(),
                                                quiz.getOptions(),
                                                quiz.getCorrectAnswer(),
                                                quiz.getAssignmentId()


                                        ))
                                        .collect(Collectors.toList())
                        ))
                .collect(Collectors.toList());
    }

    public AssignmentDto getAssignment(String assignmentId) throws ExecutionException, InterruptedException {
        Assignment assignment = assignmentRepository.getAssignmentById(assignmentId);
        if (assignment != null) {
            return new AssignmentDto(
                    assignment.getAssignmentId(),
                    assignment.getTitle(),
                    assignment.getDueDate(),
                    assignment.getInstructions(),
                    assignment.getNoOfQuestions(),
                    assignment.getTotalTime(),
                    assignment.getPublishedTimestamp(),
                    assignment.getUserId(),
                    assignment.getQuizzes().stream()
                            .map(quiz -> new AssignmentQuizDto(
                                    quiz.getQuizId(),
                                    quiz.getQuestion(),
                                    quiz.getOptions(),
                                    quiz.getCorrectAnswer(),
                                    quiz.getAssignmentId()

                            ))
                            .collect(Collectors.toList())
            );
        }
        return null;
    }

//    public String deleteAssignment(String assignmentId) throws ExecutionException, InterruptedException {
//        return assignmentRepository.deleteAssignment(assignmentId);
//    }

}