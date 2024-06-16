package com.helaedu.website.service;

import com.helaedu.website.dto.TestDto;
import com.helaedu.website.entity.Test;
import com.helaedu.website.repository.TestRepository;
import org.springframework.stereotype.Service;

import java.util.concurrent.ExecutionException;

@Service
public class TestService {
    private final TestRepository testRepository;

    public TestService(TestRepository testRepository) {
        this.testRepository = testRepository;
    }

    public TestDto getTest(String documentId) throws ExecutionException, InterruptedException {
        Test test = testRepository.getTestById(documentId);
        if (test != null) {
            TestDto testDto = new TestDto();
            testDto.setDocumentId(test.getDocument_id());
            testDto.setName(test.getName());
            testDto.setAge(test.getAge());
            return testDto;
        }
        return null;
    }
}
