package com.nurseManage.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nurseManage.Repository.PatientRepository;
import com.nurseManage.model.Patient;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import java.util.Optional;;

@RestController
@RequestMapping("/api/patients")
public class PatientController {

    @Autowired
    private PatientRepository patientRepository;

    @PostMapping("/patientRegister")
    public ResponseEntity<String> patientRegister(@RequestBody Patient patient, @RequestParam String Id) {
        patient.setNurseId(Id);
        patientRepository.save(patient);
        return ResponseEntity.ok("Patient registered successfully");
    }

    @DeleteMapping("/del/{id}")
    public boolean deletePatient(@PathVariable String id) {
        Optional<Patient> existingPatient = patientRepository.findById(id);
        if (existingPatient.isEmpty()) {
            return false;
        }
        patientRepository.deleteById(existingPatient.get().getId());
        return true;
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getPatient(@PathVariable String id) {
        Optional<Patient> existingPatient = patientRepository.findById(id);
        if (existingPatient.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(existingPatient, HttpStatus.OK);
    }

    @GetMapping("/getPatientAll")
    public List<Patient> getMethodName() {
        return patientRepository.findAll();
    }

    @PatchMapping("/savePatient")
    public ResponseEntity<?> updatePatient(@RequestBody Patient savepatient) {
        if (savepatient.getId() == null) {
            return new ResponseEntity<>("Patient ID is required for update.", HttpStatus.BAD_REQUEST);
        }

        Optional<Patient> optionalPatient = patientRepository.findById(savepatient.getId());

        if (optionalPatient.isEmpty()) {
            return new ResponseEntity<>("Patient not found.", HttpStatus.NOT_FOUND);
        }

        Patient existingPatient = optionalPatient.get();

        if (savepatient.getFullName() != null)
            existingPatient.setFullName(savepatient.getFullName());
        if (savepatient.getAge() > 0)
            existingPatient.setAge(savepatient.getAge());
        if (savepatient.getGender() != null)
            existingPatient.setGender(savepatient.getGender());
        if (savepatient.getContact() != null)
            existingPatient.setContact(savepatient.getContact());
        if (savepatient.getAddress() != null)
            existingPatient.setAddress(savepatient.getAddress());
        if (savepatient.getAdmissionDate() != null)
            existingPatient.setAdmissionDate(savepatient.getAdmissionDate());
        if (savepatient.getSymptoms() != null)
            existingPatient.setSymptoms(savepatient.getSymptoms());
        if (savepatient.getDiagnosis() != null)
            existingPatient.setDiagnosis(savepatient.getDiagnosis());
        if (savepatient.getDoctor() != null)
            existingPatient.setDoctor(savepatient.getDoctor());
        if (savepatient.getWard() != null)
            existingPatient.setWard(savepatient.getWard());
        if (savepatient.getNurseId() != null)
            existingPatient.setNurseId(savepatient.getNurseId());
        if (savepatient.getStatus() != null) {
            existingPatient.setStatus(savepatient.getStatus());
        }
        Patient savedPatient = patientRepository.save(existingPatient);

        return new ResponseEntity<>(savedPatient, HttpStatus.OK);
    }

}
