package com.helaedu.website.service;

import com.helaedu.website.dto.AdminDto;
import com.helaedu.website.entity.Admin;
import com.helaedu.website.repository.AdminRepository;
import com.helaedu.website.util.UniqueIdGenerator;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;
import java.util.concurrent.ExecutionException;
import java.util.stream.Collectors;

@Service
public class AdminService {
    private final AdminRepository adminRepository;

    public AdminService(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    public String createAdmin(AdminDto adminDto) throws ExecutionException, InterruptedException {
        Admin existingAdmin = adminRepository.getAdminByEmail(adminDto.getEmail());
        if (existingAdmin != null) {
            throw new IllegalArgumentException("Email already exists");
        }

        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String userId = UniqueIdGenerator.generateUniqueId("ad", adminRepository::exists);

        Admin admin = new Admin(
                userId,
                adminDto.getFirstName(),
                adminDto.getLastName(),
                adminDto.getEmail(),
                encoder.encode(adminDto.getPassword()),
                Instant.now().toString(),
                "ROLE_ADMIN"
        );
        adminDto.setUserId(admin.getUserId());
        return adminRepository.createAdmin(admin);
    }

    public List<AdminDto> getAllAdmins() throws ExecutionException, InterruptedException {
        List<Admin> admins = adminRepository.getAllAdmins();
        return admins.stream().map(admin ->
                        new AdminDto(
                                admin.getUserId(),
                                admin.getFirstName(),
                                admin.getLastName(),
                                admin.getEmail(),
                                admin.getPassword(),
                                admin.getRegTimestamp(),
                                admin.getRole()
                        )
                )
                .collect(Collectors.toList());
    }

    public AdminDto getAdmin(String userId) throws ExecutionException, InterruptedException {
        Admin admin = adminRepository.getAdminById(userId);
        if (admin != null) {
            return new AdminDto(
                    userId,
                    admin.getFirstName(),
                    admin.getLastName(),
                    admin.getEmail(),
                    admin.getPassword(),
                    admin.getRegTimestamp(),
                    admin.getRole()
            );
        }
        return null;
    }

    public String updateAdmin(String userId, AdminDto adminDto) throws ExecutionException, InterruptedException {
        Admin existingAdmin = adminRepository.getAdminById(userId);
        if(existingAdmin == null) {
            throw new IllegalArgumentException("Admin not found");
        }
        adminDto.setUserId(userId);
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        Admin admin = new Admin(
                adminDto.getUserId(),
                adminDto.getFirstName(),
                adminDto.getLastName(),
                adminDto.getEmail(),
                encoder.encode(adminDto.getPassword()),
                adminDto.getRegTimestamp(),
                adminDto.getRole()
        );
        return adminRepository.updateAdmin(userId, admin);
    }

    public String deleteAdmin(String userId) throws ExecutionException, InterruptedException {
        return adminRepository.deleteAdmin(userId);
    }
}
