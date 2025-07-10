package com.nurseManage.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@Document(collection = "patients")
public class Patient {

    @Id
    private String id;

    private String fullName;
    private int age;
    private String gender;
    private String contact;
    private String address;
    private String admissionDate;
    private String symptoms;
    private String diagnosis;
    private String doctor;
    private String ward;
    private String status;
    private String nurseId;
}
