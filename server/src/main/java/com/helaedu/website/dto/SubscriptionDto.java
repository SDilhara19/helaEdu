package com.helaedu.website.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class SubscriptionDto {
    private String subscriptionId;
    private long paidAmount;
    private String startTimestamp;
    private String endTimestamp;
    private boolean isCanceled;
}
