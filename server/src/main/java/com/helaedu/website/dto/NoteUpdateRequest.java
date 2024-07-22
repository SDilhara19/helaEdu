package com.helaedu.website.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class NoteUpdateRequest {

    @NotBlank
    @Email
    private String email;

    @Valid
    private NoteDto noteDto;
}
