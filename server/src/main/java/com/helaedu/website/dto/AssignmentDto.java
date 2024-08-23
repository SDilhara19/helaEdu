package com.helaedu.website.dto;

import com.helaedu.website.entity.AssignmentQuiz;
import jakarta.validation.constraints.NotEmpty;
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
public class AssignmentDto {
    private String assignmentId;

    @NotEmpty(message = "Title is required")
    private String title;

    @NotEmpty(message = "Instructions are required")
    private String instructions;

    @NotEmpty(message = "Total time is required")
    private String totalTime;

    private String publishedTimestamp;
    private String userId;
    private List<AssignmentQuiz> quizzes;
}
