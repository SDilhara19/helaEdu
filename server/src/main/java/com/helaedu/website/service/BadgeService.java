package com.helaedu.website.service;

import com.helaedu.website.dto.BadgeDto;
import com.helaedu.website.entity.Badge;
import com.helaedu.website.repository.BadgeRepository;
import org.springframework.stereotype.Service;

import java.util.concurrent.ExecutionException;
@Service
public class BadgeService {
    private final BadgeRepository badgeRepository;

    public BadgeService(BadgeRepository badgeRepository) {
        this.badgeRepository = badgeRepository;
    }

    public String createBadge(BadgeDto badgeDto) throws ExecutionException, InterruptedException {

        Badge badge= new Badge(
                badgeDto.getBadgeId(),
                badgeDto.getName(),
                badgeDto.getDescription(),
                badgeDto.getImageUrl(),
                badgeDto.getUserType()
        );
        return badgeRepository.createBadge(badge);
    }
}
