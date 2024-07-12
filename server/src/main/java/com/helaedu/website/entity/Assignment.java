package com.helaedu.website.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Assignment {

    private String assignmentId;
    private String title;
    private LocalDateTime dueDate;
    private String instructions;

    private Integer noOfQuestions;
    private String totalTime;

    private LocalDateTime publishedTimestamp;

    private String userId;

    private List<Quiz> quizzes = new ArrayList<>();

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Quiz {
        private String questionText;
        private List<String> options;
        private String correctAnswer;
    }
}
