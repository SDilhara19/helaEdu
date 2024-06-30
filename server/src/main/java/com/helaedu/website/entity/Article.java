
package com.helaedu.website.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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
    private ArrayList<String> additionalFilesRefs;
    private ArrayList<String> tags;
    private String publishedTimestamp;
    private String lastUpdatedTimestamp;
    private String status;
    private String rejectedReason;
    private String userId;
}
