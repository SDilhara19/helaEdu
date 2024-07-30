package com.helaedu.website.service;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.UserRecord;
import com.helaedu.website.dto.AdminDto;
import com.helaedu.website.dto.StudentDto;
import com.helaedu.website.entity.Admin;
import com.helaedu.website.entity.Student;
import com.helaedu.website.entity.Teacher;
import com.helaedu.website.repository.AdminRepository;
import com.helaedu.website.util.UniqueIdGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.Instant;
import java.util.List;
import java.util.concurrent.ExecutionException;
import java.util.stream.Collectors;

@Service
public class AdminService {
    private final AdminRepository adminRepository;
    @Autowired
    private EmailVerificationService emailVerificationService;
    @Autowired
    private FirebaseStorageService firebaseStorageService;
    public AdminService(AdminRepository adminRepository, FirebaseStorageService firebaseStorageService) {
        this.adminRepository = adminRepository;
        this.firebaseStorageService = firebaseStorageService;
    }
    public String createAdmin(AdminDto adminDto) throws ExecutionException, InterruptedException, FirebaseAuthException {
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
                "ROLE_ADMIN",
                null
        );
        adminDto.setUserId(admin.getUserId());

        FirebaseAuth firebaseAuth = FirebaseAuth.getInstance();
        UserRecord.CreateRequest request = new UserRecord.CreateRequest()
                .setEmail(adminDto.getEmail())
                .setEmailVerified(false)
                .setPassword(adminDto.getPassword())
                .setUid(adminDto.getUserId());

        firebaseAuth.createUser(request);

        emailVerificationService.sendVerificationEmail(adminDto.getUserId(), adminDto.getEmail(), "admins");
        return adminRepository.createAdmin(admin);
    }

    public String uploadProfilePicture(String email, MultipartFile profilePicture) throws IOException, ExecutionException, InterruptedException {
        Admin admin = adminRepository.getAdminByEmail(email);
        String profilePictureUrl = firebaseStorageService.uploadProfilePicture(profilePicture, email);
        if(admin != null) {
            admin.setProfilePictureUrl(profilePictureUrl);
            adminRepository.updateAdminByEmail(email, admin);
        } else {
            throw new IllegalArgumentException("Admin not found");
        }
        return profilePictureUrl;
    }

    public void verifyEmail(String userId) throws ExecutionException, InterruptedException, FirebaseAuthException {
        FirebaseAuth.getInstance();

        Admin admin = adminRepository.getAdminById(userId);
        if (admin != null) {
            admin.setEmailVerified(true);
            adminRepository.updateAdmin(userId, admin);
        } else {
            throw new IllegalArgumentException("Admin not found");
        }
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
                                admin.getRole(),
                                admin.isEmailVerified()
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
                    admin.getRole(),
                    admin.isEmailVerified()
            );
        }
        return null;
    }

    public AdminDto getAdminByEmail(String email) throws ExecutionException, InterruptedException {
        Admin admin = adminRepository.getAdminByEmail(email);
        if (admin != null) {
            return new AdminDto(
                    admin.getUserId(),
                    admin.getFirstName(),
                    admin.getLastName(),
                    admin.getEmail(),
                    admin.getPassword(),
                    admin.getRegTimestamp(),
                    admin.getRole(),
                    admin.isEmailVerified()
            );
        }
        return null;
    }

    public String updateAdmin(String userId, AdminDto adminDto) throws ExecutionException, InterruptedException {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

        Admin existingAdmin = adminRepository.getAdminById(userId);
        if(existingAdmin == null) {
            throw new IllegalArgumentException("Admin not found");
        }

        if(adminDto.getFirstName() != null && !adminDto.getFirstName().equals(existingAdmin.getFirstName())) {
            existingAdmin.setFirstName(adminDto.getFirstName());
        }
        if(adminDto.getLastName() != null && !adminDto.getLastName().equals(existingAdmin.getLastName())) {
            existingAdmin.setLastName(adminDto.getLastName());
        }
        if(adminDto.getEmail() != null && !adminDto.getEmail().equals(existingAdmin.getEmail())) {
            existingAdmin.setEmail(adminDto.getEmail());
        }
        if(adminDto.getPassword() != null && !(encoder.encode(adminDto.getPassword()).equals(encoder.encode(existingAdmin.getPassword())))) {
            existingAdmin.setPassword(encoder.encode(adminDto.getPassword()));
        }
        if(adminDto.getRegTimestamp() != null) {
            existingAdmin.setRegTimestamp(adminDto.getRegTimestamp());
        }

        return adminRepository.updateAdmin(userId, existingAdmin);
    }

    public String deleteAdmin(String userId) throws ExecutionException, InterruptedException {
        return adminRepository.deleteAdmin(userId);
    }
}
