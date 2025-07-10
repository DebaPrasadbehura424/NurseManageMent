package com.nurseManage.Repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.nurseManage.model.Admin;

public interface AdminRepository extends MongoRepository<Admin, String> {

    Optional<Admin> findByEmail(String email);

    boolean existsByEmail(String email);

}
