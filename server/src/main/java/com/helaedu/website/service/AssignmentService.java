package com.helaedu.website.service;

import com.helaedu.website.dto.AssignmentDto;
import com.helaedu.website.dto.AssignmentQuizDto;
import com.helaedu.website.entity.Assignment;
import com.helaedu.website.entity.AssignmentQuiz;
import com.helaedu.website.repository.AssignmentRepository;
import com.helaedu.website.util.UniqueIdGenerator;
import org.springframework.stereotype.Service;

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

    public String createAssignment(String userId, AssignmentDto assignmentDto) throws ExecutionException, InterruptedException {

        String assignmentId = UniqueIdGenerator.generateUniqueId("as", assignmentRepository::exists);

        Assignment assignment = new Assignment(
                assignmentId,
                assignmentDto.getTitle(),
                assignmentDto.getInstructions(),
                assignmentDto.getTotalTime(),
                assignmentDto.getPublishedTimestamp(),
                userId,
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
                                assignment.getInstructions(),
                                assignment.getTotalTime(),
                                assignment.getPublishedTimestamp(),
                                assignment.getUserId(),
                                assignment.getQuizzes()
                        )
                )
                .collect(Collectors.toList());
    }

    public List<AssignmentDto> getAssignmentsByTM(String userId) throws ExecutionException, InterruptedException {
        List<Assignment> assignments = assignmentRepository.getAssignmentsByTM(userId);
        return assignments.stream()
                .map(assignment ->
                        new AssignmentDto(
                                assignment.getAssignmentId(),
                                assignment.getTitle(),
                                assignment.getInstructions(),
                                assignment.getTotalTime(),
                                assignment.getPublishedTimestamp(),
                                assignment.getUserId(),
                                assignment.getQuizzes()
                        )
                )
                .collect(Collectors.toList());
    }

    public AssignmentDto getAssignment(String assignmentId) throws ExecutionException, InterruptedException {
        Assignment assignment = assignmentRepository.getAssignmentById(assignmentId);
        if (assignment != null) {
            return new AssignmentDto(
                    assignment.getAssignmentId(),
                    assignment.getTitle(),
                    assignment.getInstructions(),
                    assignment.getTotalTime(),
                    assignment.getPublishedTimestamp(),
                    assignment.getUserId(),
                    assignment.getQuizzes()
                    );
        }
        return null;
    }

    public String addQuizzesToAssignment(String assignmentId, List<AssignmentQuizDto> quizzes) throws ExecutionException, InterruptedException {
        Assignment assignment = assignmentRepository.getAssignmentById(assignmentId);
        if (assignment != null) {
            List<AssignmentQuiz> quizEntities = quizzes.stream()
                    .map(quizDto -> new AssignmentQuiz(
                            quizDto.getQuizId(),
                            quizDto.getQuestion(),
                            quizDto.getOptions(),
                            quizDto.getCorrectAnswer(),
                            quizDto.getAssignmentId(),
                            quizDto.getMarks()
                    ))
                    .toList();

            assignment.getQuizzes().addAll(quizEntities);
            assignmentRepository.updateAssignment(assignmentId, assignment);
            return "Quizzes added successfully";
        }
        return "Assignment not found";
    }
}