
package com.helaedu.website.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Article {
    private String articleId;
    private String title;
    private String content;
    private String imageRef;
    private String additionalFilesRefs;
    private ArrayList<String> tags;
    private LocalDateTime publishedTimestamp;
    private String lastUpdatedTimestamp;
    private String status;
    private String reviewedModeratorId;
    private String rejectedReason;
    private String userId;
    private ArrayList<String> upvote;
}
