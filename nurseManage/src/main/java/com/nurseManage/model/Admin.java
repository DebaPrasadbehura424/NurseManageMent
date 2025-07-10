package com.nurseManage.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "Admins")
@Data
@NoArgsConstructor
public class Admin {
    @Id
    private String id;
    private String email;
    private String adminPassword;
}
