package com.helaedu.website.service;

import com.helaedu.website.dto.NoteDto;
import com.helaedu.website.entity.Note;
import com.helaedu.website.repository.NoteRepository;
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
}
