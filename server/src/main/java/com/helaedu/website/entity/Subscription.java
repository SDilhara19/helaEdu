package com.helaedu.website.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Subscription {
    private String subscriptionId;
    private long paidAmount;
    private String startTimestamp;
    private String endTimestamp;
    private boolean isCanceled;
}
