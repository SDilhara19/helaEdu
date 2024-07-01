package com.helaedu.website.service;

import com.helaedu.website.entity.Subscription;
import com.helaedu.website.repository.SubscriptionRepository;
import com.helaedu.website.util.UniqueIdGenerator;
import com.helaedu.website.dto.StudentDto;
import com.helaedu.website.entity.Note;
import com.helaedu.website.entity.Student;
import com.helaedu.website.repository.NoteRepository;
import com.helaedu.website.repository.StudentRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.List;

import java.util.concurrent.ExecutionException;
import java.util.stream.Collectors;

@Service
public class StudentService {
    private final StudentRepository studentRepository;
    private final NoteRepository noteRepository;
    private final SubscriptionRepository subscriptionRepository;

    public StudentService(StudentRepository studentRepository, NoteRepository noteRepository, SubscriptionRepository subscriptionRepository) {
        this.studentRepository = studentRepository;
        this.noteRepository = noteRepository;
        this.subscriptionRepository = subscriptionRepository;
    }

    public String createStudent(StudentDto studentDto) throws ExecutionException, InterruptedException {
        Student existingStudent = studentRepository.getStudentByEmail(studentDto.getEmail());
        if (existingStudent != null) {
            throw new IllegalArgumentException("Email already exists");
        }

        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String userId = UniqueIdGenerator.generateUniqueId("st", studentRepository::exists);
        String noteId = UniqueIdGenerator.generateUniqueId("sn", noteRepository::exists);

        Note note = new Note(noteId, "");
        noteRepository.createNote(note);

        Student student = new Student(
                userId,
                studentDto.getFirstName(),
                studentDto.getLastName(),
                studentDto.getEmail(),
                encoder.encode(studentDto.getPassword()),
                Instant.now().toString(),
                noteId,
                studentDto.getSubscriptionId(),
                "ROLE_STUDENT"
        );
        studentDto.setUserId(student.getUserId());
        studentDto.setNoteId(noteId);
        return studentRepository.createStudent(student);
    }

    public List<StudentDto> getAllStudents() throws ExecutionException, InterruptedException {
        List<Student> students = studentRepository.getAllStudents();
        return students.stream().map(student ->
                        new StudentDto(
                                student.getUserId(),
                                student.getFirstName(),
                                student.getLastName(),
                                student.getEmail(),
                                student.getPassword(),
                                student.getRegTimestamp(),
                                student.getNoteId(),
                                student.getSubscriptionId(),
                                student.getRole()
                        )
                )
                .collect(Collectors.toList());
    }

    public StudentDto getStudent(String userId) throws ExecutionException, InterruptedException {
        Student student = studentRepository.getStudentById(userId);
        if (student != null) {
            return new StudentDto(
                    userId,
                    student.getFirstName(),
                    student.getLastName(),
                    student.getEmail(),
                    student.getPassword(),
                    student.getRegTimestamp(),
                    student.getNoteId(),
                    student.getSubscriptionId(),
                    student.getRole()
            );
        }
        return null;
    }

    public String updateStudent(String userId, StudentDto studentDto) throws ExecutionException, InterruptedException {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

        Student existingStudent = studentRepository.getStudentById(userId);
        if(existingStudent == null) {
            throw new IllegalArgumentException("Student not found");
        }

        if(studentDto.getFirstName() != null && !studentDto.getFirstName().equals(existingStudent.getFirstName())) {
            existingStudent.setFirstName(studentDto.getFirstName());
        }
        if(studentDto.getLastName() != null && !studentDto.getLastName().equals(existingStudent.getLastName())) {
            existingStudent.setLastName(studentDto.getLastName());
        }
        if(studentDto.getEmail() != null && !studentDto.getEmail().equals(existingStudent.getEmail())) {
            existingStudent.setEmail(studentDto.getEmail());
        }
        if(studentDto.getPassword() != null && !(encoder.encode(studentDto.getPassword()).equals(encoder.encode(existingStudent.getPassword())))) {
            existingStudent.setPassword(encoder.encode(studentDto.getPassword()));
        }
        if(studentDto.getRegTimestamp() != null) {
            existingStudent.setRegTimestamp(studentDto.getRegTimestamp());
        }
        if(studentDto.getNoteId() != null) {
            existingStudent.setNoteId(studentDto.getNoteId());
        }
        if(studentDto.getSubscriptionId() != null) {
            existingStudent.setSubscriptionId(studentDto.getSubscriptionId());
        }

        return studentRepository.updateStudent(userId, existingStudent);
    }

    public String deleteStudent(String userId) throws ExecutionException, InterruptedException {
        return studentRepository.deleteStudent(userId);
    }

    public String createSubscription(String userId, long paidAmount) throws ExecutionException, InterruptedException {
        String subscriptionId = UniqueIdGenerator.generateUniqueId("sub", subscriptionRepository::exists);
        String startTimestamp = Instant.now().toString();
        String endTimestamp = Instant.now().plus(30, ChronoUnit.DAYS).toString();

        Subscription subscription = new Subscription(
                subscriptionId,
                paidAmount,
                startTimestamp,
                endTimestamp,
                false
        );
        subscriptionRepository.createSubscription(subscription);

        Student student = studentRepository.getStudentById(userId);
        student.setSubscriptionId(subscriptionId);
        studentRepository.updateStudent(userId, student);

        return subscriptionId;
    }

    public void cancelSubscription(String userId) throws ExecutionException, InterruptedException {
        Student student = studentRepository.getStudentById(userId);
        student.setSubscriptionId(null);
        studentRepository.updateStudent(userId, student);
    }

    public List<StudentDto> getStudentsWithActiveSubscriptions() throws ExecutionException, InterruptedException {
        List<Student> students = studentRepository.getAllStudents();
        Instant now = Instant.now();
        Instant thirtyDaysAgo = now.minus(30, ChronoUnit.DAYS);

        return students.stream()
                .filter(student -> {
                    String subscriptionId = student.getSubscriptionId();
                    if (subscriptionId == null || subscriptionId.isEmpty()) {
                        return false;
                    }
                    Subscription subscription = null;
                    try {
                        subscription = subscriptionRepository.getSubscriptionById(subscriptionId);
                    } catch (ExecutionException | InterruptedException e) {
                        e.printStackTrace();
                    }
                    return subscription != null && !subscription.isCanceled() && Instant.parse(subscription.getStartTimestamp()).isAfter(thirtyDaysAgo);
                })
                .map(student -> new StudentDto(
                        student.getUserId(),
                        student.getFirstName(),
                        student.getLastName(),
                        student.getEmail(),
                        student.getPassword(),
                        student.getRegTimestamp(),
                        student.getNoteId(),
                        student.getSubscriptionId(),
                        student.getRole()
                ))
                .collect(Collectors.toList());
    }
}
