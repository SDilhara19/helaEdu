package com.helaedu.website.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Badge {
    private String badgeId;
    private String name;
    private String description;
    private String imageUrl;
    private String userType;
}
