package com.helaedu.website.service;

import com.helaedu.website.dto.ArticleDto;
import com.helaedu.website.entity.Article;
import com.helaedu.website.repository.ArticleRepository;
import com.helaedu.website.util.UniqueIdGenerator;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.concurrent.ExecutionException;
import java.util.stream.Collectors;

@Service
public class ArticleService {
    private final ArticleRepository articleRepository;

    public ArticleService(ArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }

    public String createArticle(ArticleDto articleDto) throws ExecutionException, InterruptedException {

        String articleId = UniqueIdGenerator.generateUniqueId("ar", articleRepository::exists);

        Article article= new Article(
                articleId,
                articleDto.getTitle(),
                articleDto.getContent(),
                articleDto.getImageRef(),
                articleDto.getAdditionalFilesRefs(),
                articleDto.getTags(),
                articleDto.getPublishedTimestamp(),
                articleDto.getLastUpdatedTimestamp(),
                "PENDING",
                articleDto.getRejectedReason(),
                articleDto.getUserId()
        );
        return articleRepository.createArticle(article);
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
                                article.getRejectedReason(),
                                article.getUserId()
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
                    article.getRejectedReason(),
                    article.getUserId()
            );
        }
        return null;
    }
//    get articles by teacher's id
//    public ArticleDto getArticleByTeacherId(String teacherId) throws ExecutionException, InterruptedException {
//        Article article = articleRepository.getArticleByTeacherId(teacherId);
//        if (article != null) {
//            return new ArticleDto(
//                    article.getArticleId(),
//                    article.getTitle(),
//                    article.getTags(),
//                    article.getContent(),
//                    article.getImg(),
//                    article.getAdditionalFile(),
//                    article.getTeacherId(),
//                    article.getStatus()
//            );
//        }
//        return null;
//    }

    public String deleteArticle(String articleId) throws ExecutionException, InterruptedException {
        return articleRepository.deleteArticle(articleId);
    }

    public String updateArticle(String articleId, ArticleDto articleDto) throws ExecutionException, InterruptedException {
        Article existingArticle = articleRepository.getArticleById(articleId);
        if(existingArticle == null) {
            throw new IllegalArgumentException("Article not found");
        }
        articleDto.setArticleId(articleId);
        Article article = new Article(
                articleDto.getArticleId(),
                articleDto.getTitle(),
                articleDto.getContent(),
                articleDto.getImageRef(),
                articleDto.getAdditionalFilesRefs(),
                articleDto.getTags(),
                articleDto.getPublishedTimestamp(),
                articleDto.getLastUpdatedTimestamp(),
                articleDto.getStatus(),
                articleDto.getRejectedReason(),
                articleDto.getUserId()
        );
        return articleRepository.updateArticle(articleId, article);
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
                        article.getRejectedReason(),
                        article.getUserId()
                )
        ).collect(Collectors.toList());
    }

    public String approveArticle(String articleId) throws ExecutionException, InterruptedException {
        return articleRepository.updateArticleStatus(articleId, "APPROVED");
    }

    public String declineArticle(String articleId, String rejectedReason) throws ExecutionException, InterruptedException {
        return articleRepository.updateArticleStatus(articleId, "DECLINED", rejectedReason);
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
                                article.getRejectedReason(),
                                article.getUserId()
                        )
                )
                .collect(Collectors.toList());
    }


//    get article count for teacherId
//    public List<String> getTeachersWithArticleCountGreaterThan(int count) throws ExecutionException, InterruptedException {
//        return articleRepository.getTeachersWithArticleCountGreaterThan(count);
//    }
}
