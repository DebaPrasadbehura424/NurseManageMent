package com.nurseManage.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.nurseManage.Repository.NurseRepository;
import com.nurseManage.Repository.PatientRepository;
import com.nurseManage.model.Nurse;
import com.nurseManage.model.Patient;

@RestController
@RequestMapping("/api/nurses")
public class NurseController {

    @Autowired
    private NurseRepository nurseRepository;

    @Autowired
    private PatientRepository patientRepository;

    @PostMapping("/register")
    public ResponseEntity<?> registerNurse(@RequestBody Nurse nurse) {
        if (nurse.getEmail() == null || nurse.getPassword() == null) {
            return ResponseEntity.badRequest().body("Email and password are required");
        }

        Optional<Nurse> existing = nurseRepository.findByEmail(nurse.getEmail());
        if (existing.isPresent()) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Email already exists");
        }

        Nurse saved = nurseRepository.save(nurse);
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginNurse(@RequestBody Nurse nurse) {
        Optional<Nurse> existing = nurseRepository.findByEmail(nurse.getEmail());
        if (existing.isPresent() && existing.get().getPassword().equals(nurse.getPassword())) {
            return ResponseEntity.ok(existing.get());
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
    }

    @GetMapping("/referPatient")
    public ResponseEntity<?> getYourPatients(@RequestParam String nurseId) {
        List<Patient> patients = patientRepository.findByNurseId(nurseId);
        if (patients.isEmpty()) {
            return new ResponseEntity<>(null, HttpStatus.OK);
        }
        return ResponseEntity.ok(patients);
    }
}
