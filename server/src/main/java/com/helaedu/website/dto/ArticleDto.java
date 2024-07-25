
package com.helaedu.website.dto;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.Instant;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class ArticleDto {
    private String articleId;

    @NotEmpty(message = "Title is required")
    private String title;

    @NotEmpty(message = "Content is required")
    private String content;

    @NotEmpty(message = "An image is required")
    private String imageRef;

    private List<String> additionalFilesRefs;
    private ArrayList<String> tags;
    private Instant publishedTimestamp;
    private String lastUpdatedTimestamp;
    private String status;

    private String reviewedModeratorId;
    private String rejectedReason;

    private String userId;
    
    private ArrayList<String> upvote;
}
