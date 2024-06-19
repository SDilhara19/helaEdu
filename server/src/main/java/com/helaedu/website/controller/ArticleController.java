package com.helaedu.website.controller;

import com.helaedu.website.dto.ArticleDto;
//import com.helaedu.website.dto.StudentDto;
import com.helaedu.website.service.ArticleService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/articles")
@CrossOrigin(origins = "*")
public class ArticleController{
    private final ArticleService articleService;
    public ArticleController(ArticleService articleService){
        this.articleService = articleService;
    }
    @GetMapping
    public ResponseEntity<Object> getAllArticles() throws ExecutionException, InterruptedException{
        List<ArticleDto> articles = articleService.getAllArticles();
        return ResponseEntity.ok(articles);
    }
    //    @GetMapping
//    public ResponseEntity<Object> getArticlesByStatus() throws ExecutionException, InterruptedException{
//        ArticleDto articles = articleService.getArticlesByStatus();
//        return ResponseEntity.ok(articles);
//    }
    @GetMapping("/{articleId}")
    public ResponseEntity<ArticleDto> getArticle(@PathVariable String articleId) throws ExecutionException, InterruptedException {
        ArticleDto articleDto = articleService.getArticle(articleId);
        if (articleDto != null) {
            return ResponseEntity.ok(articleDto);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/teacher/{teacherId}")
    public ResponseEntity<ArticleDto> getArticleTeacherId(@PathVariable String teacherId) throws ExecutionException, InterruptedException {
        ArticleDto articleDto = articleService.getArticle(teacherId);
        if (articleDto != null) {
            return ResponseEntity.ok(articleDto);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @DeleteMapping("/{articleId}")
    public ResponseEntity<String> deleteArticle(@PathVariable String articleId) throws ExecutionException, InterruptedException {
        String result = articleService.deleteArticle(articleId);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
    @PutMapping("/{articleId}")
    public ResponseEntity<String> updateArticle(@PathVariable String articleId, @RequestBody ArticleDto articleDto) throws ExecutionException, InterruptedException {
        String result = articleService.updateArticle(articleId, articleDto);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
//    get all pending artilces
    @GetMapping("/pending")
    public ResponseEntity<List<ArticleDto>> getPendingArticles() throws ExecutionException, InterruptedException {
        List<ArticleDto> articles = articleService.getPendingArticles();
        return ResponseEntity.ok(articles);
    }
//    approve relevant articles as approved
    @PutMapping("/{articleId}/approve")
    public ResponseEntity<String> approveArticle(@PathVariable String articleId) throws ExecutionException, InterruptedException {
        String result = articleService.approveArticle(articleId);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}