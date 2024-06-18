package com.helaedu.website.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;

@Getter
@Setter
@AllArgsConstructor
public class ArticleDto {
    private String articleId;
    private String title;
    private ArrayList<String> tags;
    private String content;
    private String img;
    private String additionalFile;
    private String teacherId;
    private String articleStatus;


}
