
package com.helaedu.website.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.lang.reflect.Array;
import java.util.ArrayList;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Article {
    private String articleId;
    private String title;
    private ArrayList<String> tags;
    private String content;
    private String img;
    private String additionalFile;
    private String teacherId;
    private String articleStatus;

}
