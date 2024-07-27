package com.helaedu.website.service;
import java.io.IOException;
import java.time.Instant;
import com.helaedu.website.dto.ArticleDto;
import com.helaedu.website.entity.Article;
import com.helaedu.website.repository.ArticleRepository;
import com.helaedu.website.util.UniqueIdGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;
import java.util.stream.Collectors;

@Service
public class ArticleService {
    private final ArticleRepository articleRepository;

    @Autowired
    private FirebaseStorageService firebaseStorageService;

    public ArticleService(ArticleRepository articleRepository, FirebaseStorageService firebaseStorageService) {
        this.articleRepository = articleRepository;
        this.firebaseStorageService = firebaseStorageService;
    }

    public String createArticle(ArticleDto articleDto) throws ExecutionException, InterruptedException {

        String articleId = UniqueIdGenerator.generateUniqueId("ar", articleRepository::exists);

        Instant publishedTimestamp = articleDto.getPublishedTimestamp() != null ?
                articleDto.getPublishedTimestamp() :
                Instant.now();

        Article article = new Article(
                articleId,
                articleDto.getTitle(),
                articleDto.getContent(),
                articleDto.getImageRef(),
                articleDto.getAdditionalFilesRefs(),
                articleDto.getTags(),
                publishedTimestamp,
                articleDto.getLastUpdatedTimestamp(),
                "PENDING",
                articleDto.getReviewedModeratorId(),
                articleDto.getRejectedReason(),
                articleDto.getUserId(),
                new ArrayList<>()
        );

        return articleRepository.createArticle(article);
    }

    public String uploadArticleCover(String articleId, MultipartFile articleCoverImage) throws IOException, ExecutionException, InterruptedException {
        Article article = articleRepository.getArticleById(articleId);

        String articleCoverUrl = firebaseStorageService.uploadArticleCover(articleCoverImage, articleId);

        if(article != null) {
            article.setImageRef(articleCoverUrl);
            articleRepository.updateArticle(articleId, article);
        } else {
            throw new IllegalArgumentException("Article not found");
        }
        return articleCoverUrl;
    }

    public List<String> uploadAdditionalFiles(String articleId, List<MultipartFile> additionalFiles) throws IOException, ExecutionException, InterruptedException {
        Article article = articleRepository.getArticleById(articleId);
        List<String> additionalFilesUrls = new ArrayList<>();

        for (MultipartFile additionalFile : additionalFiles) {
            String additionalFileUrl = firebaseStorageService.uploadAdditionalFile(additionalFile, articleId);
            additionalFilesUrls.add(additionalFileUrl);
        }

        if(article != null) {
            article.setAdditionalFilesRefs(additionalFilesUrls);
            articleRepository.updateArticle(articleId, article);
        } else {
            throw new IllegalArgumentException("Article not found");
        }
        return additionalFilesUrls;
    }

    public List<ArticleDto> getAllArticles() throws ExecutionException, InterruptedException {
        List<Article> articles = articleRepository.getAllArticles();
        return articles.stream().map(article ->
                        new ArticleDto(
                                article.getArticleId(),
                                article.getTitle(),
                                article.getContent(),
                                article.getImageRef(),
                                article.getAdditionalFilesRefs(),
                                article.getTags(),
                                article.getPublishedTimestamp(),
                                article.getLastUpdatedTimestamp(),
                                article.getStatus(),
                                article.getReviewedModeratorId(),
                                article.getRejectedReason(),
                                article.getUserId(),
                                article.getUpvote()
                        )
                )
                .collect(Collectors.toList());
    }

    public ArticleDto getArticle(String articleId) throws ExecutionException, InterruptedException {
        Article article = articleRepository.getArticleById(articleId);
        if (article != null) {
            return new ArticleDto(
                    article.getArticleId(),
                    article.getTitle(),
                    article.getContent(),
                    article.getImageRef(),
                    article.getAdditionalFilesRefs(),
                    article.getTags(),
                    article.getPublishedTimestamp(),
                    article.getLastUpdatedTimestamp(),
                    article.getStatus(),
                    article.getReviewedModeratorId(),
                    article.getRejectedReason(),
                    article.getUserId(),
                    article.getUpvote()
            );
        }
        return null;
    }

    public String deleteArticle(String articleId) throws ExecutionException, InterruptedException {
        return articleRepository.deleteArticle(articleId);
    }

    public String updateArticle(String articleId, ArticleDto articleDto) throws ExecutionException, InterruptedException {
        Article existingArticle = articleRepository.getArticleById(articleId);
        if(existingArticle == null) {
            throw new IllegalArgumentException("Article not found");
        }
        if(articleDto.getTitle() != null && !articleDto.getTitle().equals(existingArticle.getTitle())) {
            existingArticle.setTitle(articleDto.getTitle());
        }
        if(articleDto.getContent() != null && !articleDto.getContent().equals(existingArticle.getContent())) {
            existingArticle.setContent(articleDto.getContent());
        }
        if(articleDto.getImageRef() != null && !articleDto.getImageRef().equals(existingArticle.getImageRef())) {
            existingArticle.setImageRef(articleDto.getImageRef());
        }
        if(articleDto.getAdditionalFilesRefs() != null && !articleDto.getAdditionalFilesRefs().equals(existingArticle.getAdditionalFilesRefs())) {
            existingArticle.setAdditionalFilesRefs(articleDto.getAdditionalFilesRefs());
        }
        if(articleDto.getTags() != null && !articleDto.getTags().equals(existingArticle.getTags())) {
            existingArticle.setTags(articleDto.getTags());
        }
        if(articleDto.getStatus() != null && !articleDto.getStatus().equals(existingArticle.getStatus())) {
            existingArticle.setStatus(articleDto.getStatus());
        }
        if(articleDto.getReviewedModeratorId() != null && !articleDto.getReviewedModeratorId().equals(existingArticle.getReviewedModeratorId())) {
            existingArticle.setReviewedModeratorId(articleDto.getReviewedModeratorId());
        }
        if(articleDto.getRejectedReason() != null && !articleDto.getRejectedReason().equals(existingArticle.getRejectedReason())) {
            existingArticle.setRejectedReason(articleDto.getRejectedReason());
        }
        return articleRepository.updateArticle(articleId, existingArticle);
    }

    public List<ArticleDto> getPendingArticles() throws ExecutionException, InterruptedException {
        List<Article> articles = articleRepository.getArticlesByStatus("PENDING");
        return articles.stream().map(article ->
                new ArticleDto(
                        article.getArticleId(),
                        article.getTitle(),
                        article.getContent(),
                        article.getImageRef(),
                        article.getAdditionalFilesRefs(),
                        article.getTags(),
                        article.getPublishedTimestamp(),
                        article.getLastUpdatedTimestamp(),
                        article.getStatus(),
                        article.getReviewedModeratorId(),
                        article.getRejectedReason(),
                        article.getUserId(),
                        article.getUpvote()
                )
        ).collect(Collectors.toList());
    }

    public List<ArticleDto> getApprovedArticles() throws ExecutionException, InterruptedException {
        List<Article> articles = articleRepository.getArticlesByStatus("APPROVED");
        return articles.stream().map(article ->
                new ArticleDto(
                        article.getArticleId(),
                        article.getTitle(),
                        article.getContent(),
                        article.getImageRef(),
                        article.getAdditionalFilesRefs(),
                        article.getTags(),
                        article.getPublishedTimestamp(),
                        article.getLastUpdatedTimestamp(),
                        article.getStatus(),
                        article.getReviewedModeratorId(),
                        article.getRejectedReason(),
                        article.getUserId(),
                        article.getUpvote()
                )
        ).collect(Collectors.toList());
    }

    public String approveArticle(String articleId, String reviewedModeratorId) throws ExecutionException, InterruptedException {
        return articleRepository.updateArticleStatus(articleId, "APPROVED", reviewedModeratorId);
    }

    public String declineArticle(String articleId, String rejectedReason, String reviewedModeratorId) throws ExecutionException, InterruptedException {
        return articleRepository.updateArticleStatus(articleId, "REJECTED", rejectedReason, reviewedModeratorId);
    }

    public List<ArticleDto> getArticlesByUser(String userId) throws ExecutionException, InterruptedException {
        List<Article> articles = articleRepository.getArticlesByUserId(userId);
        return articles.stream().map(article ->
                        new ArticleDto(
                                article.getArticleId(),
                                article.getTitle(),
                                article.getContent(),
                                article.getImageRef(),
                                article.getAdditionalFilesRefs(),
                                article.getTags(),
                                article.getPublishedTimestamp(),
                                article.getLastUpdatedTimestamp(),
                                article.getStatus(),
                                article.getReviewedModeratorId(),
                                article.getRejectedReason(),
                                article.getUserId(),
                                article.getUpvote()
                        )
                )
                .collect(Collectors.toList());
    }

    public void upvoteArticle(String articleId, String userId) throws ExecutionException, InterruptedException {
        Article article = articleRepository.getArticleById(articleId);
        if(article == null) {
            throw new IllegalArgumentException("Article not found");
        }
        if (!article.getUpvote().contains(userId)) {
            article.getUpvote().add(userId);
            articleRepository.updateArticle(articleId, article);
        }
    }


//    get article count for teacherId
//    public List<String> getTeachersWithArticleCountGreaterThan(int count) throws ExecutionException, InterruptedException {
//        return articleRepository.getTeachersWithArticleCountGreaterThan(count);
//    }
}