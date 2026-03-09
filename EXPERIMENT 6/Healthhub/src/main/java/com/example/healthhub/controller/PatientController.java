package com.example.healthhub.controller;

import com.example.healthhub.dto.PatientDTO;
import com.example.healthhub.entity.Patient;
import com.example.healthhub.service.PatientService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/patients")
public class PatientController {

    private final PatientService service;

    public PatientController(PatientService service) {
        this.service = service;
    }

    @PostMapping("/addPatient")
    public Patient createPatient(@Valid @RequestBody PatientDTO dto){
        return service.createPatient(dto);
    }

    @GetMapping("/getPatients")
    public List<Patient> getAllPatients(){
        return service.getAllPatients();
    }

    @GetMapping("/{id}")
    public Patient getPatient(@PathVariable("id") Long id){
        return service.getPatientById(id);
    }

    @DeleteMapping("/{id}")
    public String deletePatient(@PathVariable("id") Long id){
        service.deletePatient(id);
        return "Patient Deleted";
    }

    @PutMapping("/updatePatient/{id}")
    public Patient updatePatient(@PathVariable("id") Long id, @Valid @RequestBody PatientDTO dto) {
        return service.updatePatient(id, dto);
    }
}