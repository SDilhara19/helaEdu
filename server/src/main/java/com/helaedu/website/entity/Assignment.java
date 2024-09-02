package com.helaedu.website.entity;

import com.helaedu.website.dto.AssignmentQuizDto;
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
    private String instructions;
    private String totalTime;
    private String publishedTimestamp;
    private String userId;
    private List<AssignmentQuiz> quizzes;
}