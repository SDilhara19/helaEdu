package com.helaedu.website.entity;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class QuizForAssignments {
    private String quizId;

    private String question;

    private List<String> options;

    private String correctAnswer;

    private String assignmentId;
}
