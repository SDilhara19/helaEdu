
package com.helaedu.website.controller;

import com.helaedu.website.dto.ArticleDto;
//import com.helaedu.website.dto.StudentDto;
import com.helaedu.website.dto.StudentDto;
import com.helaedu.website.service.ArticleService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
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
//add an article
    @PostMapping("/createArticle")
    public ResponseEntity<String> createArticle(@Valid @RequestBody ArticleDto articleDto, BindingResult bindingResult) throws ExecutionException, InterruptedException {
        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(bindingResult.getFieldError().getDefaultMessage(), HttpStatus.BAD_REQUEST);
        }
        try {
            String articleId = articleService.createArticle(articleDto);
            return new ResponseEntity<>(articleId, HttpStatus.CREATED);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (ExecutionException | InterruptedException e) {
            return new ResponseEntity<>("Error creating article", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping
    public ResponseEntity<Object> getAllArticles() throws ExecutionException, InterruptedException{
        List<ArticleDto> articles = articleService.getAllArticles();
        return ResponseEntity.ok(articles);
    }
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

//    get all pending articles
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
    //    decline relevant articles
    @PutMapping("/{articleId}/decline")
    public ResponseEntity<String> declineArticle(@PathVariable String articleId) throws ExecutionException, InterruptedException {
        String result = articleService.declineArticle(articleId);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}


