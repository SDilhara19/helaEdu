package com.helaedu.website.Util;

import java.util.UUID;
import java.util.concurrent.ExecutionException;

public class UniqueIdGenerator {
    public interface IdChecker {
        boolean exists(String id) throws ExecutionException, InterruptedException;
    }

    public static String generateUniqueId(String prefix, IdChecker idChecker) throws ExecutionException, InterruptedException {
        String uniqueId;
        do {
            uniqueId = prefix + UUID.randomUUID();
        } while (idChecker.exists(uniqueId));
        return uniqueId;
    }
}
