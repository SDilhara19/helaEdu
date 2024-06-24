package com.helaedu.website.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class ValidationErrorResponse {

    private List<Violation> violations = new ArrayList<>();

    public void addViolation(String field, String errorMessage) {
        this.violations.add(new Violation(field, errorMessage));
    }

    @Getter
    @Setter
    public static class Violation{
        private String field;
        private String errorMessage;

        public Violation(String field, String errorMessage) {
            this.field = field;
            this.errorMessage = errorMessage;
        }
    }
}


