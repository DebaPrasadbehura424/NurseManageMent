package com.nurseManage.Repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.nurseManage.model.Patient;

public interface PatientRepository extends MongoRepository<Patient, String> {
    List<Patient> findByNurseId(String nurseId);

}
