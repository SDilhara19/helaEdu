
package com.helaedu.website.dto;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class AssignmentDto {
    private String assignmentId;

    @NotEmpty(message = "Title is required")
    private String title;
    @NotEmpty(message="Due Date is not empty")
    private LocalDateTime dueDate;
    @NotEmpty(message = "Instructions are required")
    private String instructions;
    private Integer noOfQuestions;
    @NotEmpty(message = "time period is required")
    private String totalTime;
    private LocalDateTime publishedTimestamp;
    private String userId;
    private List<QuizForAssignmentsDto> quizzes = new ArrayList<>();

}
