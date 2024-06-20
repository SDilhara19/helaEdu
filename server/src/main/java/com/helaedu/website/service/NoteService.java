package com.helaedu.website.service;

import com.helaedu.website.dto.NoteDto;
import com.helaedu.website.dto.StudentDto;
import com.helaedu.website.entity.Note;
import com.helaedu.website.entity.Student;
import com.helaedu.website.repository.NoteRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.concurrent.ExecutionException;

@Service
public class NoteService {
    private final NoteRepository noteRepository;

    public NoteService(NoteRepository noteRepository) {
        this.noteRepository = noteRepository;
    }

    public NoteDto getNote(String noteId) throws ExecutionException, InterruptedException {
        Note note = noteRepository.getNoteById(noteId);
        if (note != null) {
            return new NoteDto(
                    note.getNoteId(),
                    note.getContent()
            );
        }
        return null;
    }

    public String updateNote(String noteId, NoteDto noteDto) throws ExecutionException, InterruptedException {
        Note existingNote = noteRepository.getNoteById(noteId);
        if(existingNote == null) {
            throw new IllegalArgumentException("Note not found");
        }
        noteDto.setNoteId(noteId);
        Note note = new Note(
                noteDto.getNoteId(),
                noteDto.getContent()
        );
        return noteRepository.updateNote(noteId, note);
    }
}
