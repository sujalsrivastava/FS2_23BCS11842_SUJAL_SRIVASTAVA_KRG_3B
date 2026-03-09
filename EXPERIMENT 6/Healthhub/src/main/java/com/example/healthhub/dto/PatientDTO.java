package com.example.healthhub.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PatientDTO {

    @NotBlank(message = "Name cannot be blank")
    private String name;

    @Min(value = 0, message = "Age must be valid")
    private int age;

    @NotBlank(message = "Email cannot be blank")
    @Email(message = "Invalid email format")
    private String email;

    @NotBlank(message = "Disease cannot be blank")
    private String disease;
}