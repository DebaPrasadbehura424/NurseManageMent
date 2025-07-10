package com.nurseManage.controller;

import com.nurseManage.Repository.AdminRepository;
import com.nurseManage.Repository.NurseRepository;
import com.nurseManage.Repository.PatientRepository;
import com.nurseManage.model.Admin;
import com.nurseManage.model.Nurse;
import com.nurseManage.model.Patient;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired
    private NurseRepository nurseRepository;

    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private AdminRepository adminRepository;

    @PostMapping("/register")
    public ResponseEntity<?> registerAdmin(@RequestBody Admin admin) {
        if (admin == null || admin.getEmail() == null || admin.getAdminPassword() == null) {
            return new ResponseEntity<>("Invalid admin data", HttpStatus.BAD_REQUEST);
        }

        if (adminRepository.existsByEmail(admin.getEmail())) {
            return new ResponseEntity<>("Email already registered", HttpStatus.CONFLICT);
        }

        adminRepository.save(admin);
        return new ResponseEntity<>(admin, HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<?> adminLogin(@RequestBody Admin admin) {
        Optional<Admin> admin2 = adminRepository.findByEmail(admin.getEmail());

        if (admin2.isEmpty()) {
            return new ResponseEntity<>("Admin not found", HttpStatus.NOT_FOUND);
        }

        Admin foundAdmin = admin2.get();

        if (!foundAdmin.getAdminPassword().equals(admin.getAdminPassword())) {
            return new ResponseEntity<>("Invalid password", HttpStatus.UNAUTHORIZED);
        }

        return new ResponseEntity<>(foundAdmin, HttpStatus.OK);
    }

    @GetMapping("/getAllNurses")
    public List<Nurse> getAllNurses() {
        return nurseRepository.findAll();
    }

    @GetMapping("/getAllPatients")
    public List<Patient> getAllPatients() {
        return patientRepository.findAll();
    }
}
