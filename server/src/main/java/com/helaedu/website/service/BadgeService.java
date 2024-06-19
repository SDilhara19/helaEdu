package com.helaedu.website.service;

import com.helaedu.website.dto.ArticleDto;
import com.helaedu.website.entity.Article;
import com.helaedu.website.repository.ArticleRepository;

import java.util.concurrent.ExecutionException;

public class BadgeService {
    private final BadgeRepository badgeRepository;

    public BadgeService(BadgeRepository badgeRepository) {
        this.badgeRepository = badgeRepository;
    }

    public String createBadge(BadgeDto badgeDto) throws ExecutionException, InterruptedException {

        Badge badge= new Badge(
                badgeDto.getName(),
                badgeDto.getDescription(),
                badgeDto.getImageUrl(),
                badgeDto.getUserType()
        );
        return badgeRepository.createBadge(badge);
    }
}
