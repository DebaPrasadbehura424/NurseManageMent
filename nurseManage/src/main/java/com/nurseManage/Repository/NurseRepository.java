package com.nurseManage.Repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.nurseManage.model.Nurse;

public interface NurseRepository extends MongoRepository<Nurse, String> {
    Optional<Nurse> findByEmail(String email);
}
