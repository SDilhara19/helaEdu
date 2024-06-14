package com.helaedu.website.Controller;

import com.helaedu.website.Entity.Test;
import com.helaedu.website.Service.TestService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.concurrent.ExecutionException;

@RestController
public class TestController {
    public TestService testService;

    public TestController(TestService testService) {
        this.testService = testService;
    }

    @PostMapping("/create")
    public String createTest(@RequestBody Test test) throws ExecutionException, InterruptedException {
        return testService.createTest(test);
    }

    @GetMapping("/get")
    public Test getTest(@RequestParam String documentId) throws  InterruptedException, ExecutionException {
        return testService.getTest(documentId);
    }

    @PutMapping("/update")
    public String updateTest(@RequestParam Test test) throws  InterruptedException, ExecutionException {
        return testService.updateTest(test);
    }

    @DeleteMapping("/delete")
    public String deleteTest(@RequestParam String documentId) throws InterruptedException, ExecutionException {
        return testService.deleteTest(documentId);
    }

    @GetMapping("/test")
    public ResponseEntity<String> testGetEndpoint() {
        return ResponseEntity.ok("Test get endpoint is working");
    }
}
