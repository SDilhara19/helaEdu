package com.helaedu.website.service;

import com.helaedu.website.dto.ArticleDto;
import com.helaedu.website.entity.Article;
import com.helaedu.website.repository.ArticleRepository;
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

    public List<ArticleDto> getAllArticles() throws ExecutionException, InterruptedException {
        List<Article> articles = articleRepository.getAllArticles();
        return articles.stream().map(article ->
                        new ArticleDto(
                                article.getArticleId(),
                                article.getTitle(),
                                article.getTags(),
                                article.getContent(),
                                article.getImg(),
                                article.getAdditionalFile(),
                                article.getTeacherId(),
                                article.getArticleStatus()
                        )
                )
                .collect(Collectors.toList());
    }
//    get article by articleId
    public ArticleDto getArticle(String articleId) throws ExecutionException, InterruptedException {
        Article article = articleRepository.getArticleById(articleId);
        if (article != null) {
            return new ArticleDto(
                    article.getArticleId(),
                    article.getTitle(),
                    article.getTags(),
                    article.getContent(),
                    article.getImg(),
                    article.getAdditionalFile(),
                    article.getTeacherId(),
                    article.getArticleStatus()
            );
        }
        return null;
    }
//    get articles by teacher's id
    public ArticleDto getArticleByTeacherId(String teacherId) throws ExecutionException, InterruptedException {
        Article article = articleRepository.getArticleByTeacherId(teacherId);
        if (article != null) {
            return new ArticleDto(
                    article.getArticleId(),
                    article.getTitle(),
                    article.getTags(),
                    article.getContent(),
                    article.getImg(),
                    article.getAdditionalFile(),
                    article.getTeacherId(),
                    article.getArticleStatus()
            );
        }
        return null;
    }


    public String deleteArticle(String articleId) throws ExecutionException, InterruptedException {
        return articleRepository.deleteArticle(articleId);
    }
    public String updateArticle(String articleId, ArticleDto articleDto) throws ExecutionException, InterruptedException {
        Article article = new Article(
                articleDto.getArticleId(),
                articleDto.getTitle(),
                articleDto.getTags(),
                articleDto.getContent(),
                articleDto.getImg(),
                articleDto.getAdditionalFile(),
                articleDto.getTeacherId(),
                articleDto.getArticleStatus()

        );
        return articleRepository.updateArticle(articleId, article);
    }
//    select all articles that status==pending
    public List<ArticleDto> getPendingArticles() throws ExecutionException, InterruptedException {
        List<Article> articles = articleRepository.getArticlesByStatus("pending");
        return articles.stream().map(article ->
                new ArticleDto(
                        article.getArticleId(),
                        article.getTitle(),
                        article.getTags(),
                        article.getContent(),
                        article.getImg(),
                        article.getAdditionalFile(),
                        article.getTeacherId(),
                        article.getArticleStatus()
                )
        ).collect(Collectors.toList());
    }
    //    approve relevant articles as approved
    public String approveArticle(String articleId) throws ExecutionException, InterruptedException {
        return articleRepository.updateArticleStatus(articleId, "approved");
    }

}
