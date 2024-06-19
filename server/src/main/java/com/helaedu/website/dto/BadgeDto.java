package com.helaedu.website.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class BadgeDto {
    private Long badgeId;
    private String name;
    private String description;
    private String imageUrl;
    private String userType;

}
