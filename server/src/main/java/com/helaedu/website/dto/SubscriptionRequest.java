package com.helaedu.website.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SubscriptionRequest {
    @NotNull
    private String paidAmount;
}
