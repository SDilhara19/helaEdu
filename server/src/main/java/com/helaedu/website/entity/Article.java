
package com.helaedu.website.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.Instant;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Article {
    private String articleId;
    private String title;
    private String content;
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
