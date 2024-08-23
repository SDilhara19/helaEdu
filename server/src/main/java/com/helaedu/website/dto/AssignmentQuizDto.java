package com.helaedu.website.dto;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class AssignmentQuizDto {
    private String quizId;

    @NotEmpty(message = "Question is required")
    private String question;

    private List<String> options;

    @NotEmpty(message = "Correct answer is required")
    private String correctAnswer;

    private String assignmentId;

    @NotEmpty(message = "Marks is required")
    private int marks;
}
