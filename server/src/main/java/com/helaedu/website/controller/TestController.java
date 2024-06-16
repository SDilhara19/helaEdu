package com.helaedu.website.controller;

import com.helaedu.website.dto.TestDto;
import com.helaedu.website.service.TestService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/test")
public class TestController {
    private final TestService testService;

    public TestController(TestService testService) {
        this.testService = testService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<TestDto> getTest(@PathVariable String id) throws ExecutionException, InterruptedException {
        TestDto testDto = testService.getTest(id);
        if (testDto != null) {
            return ResponseEntity.ok(testDto);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping
    public ResponseEntity<String> testGetEndpoint() {
        return ResponseEntity.ok("Test get endpoint is working");
    }
}
