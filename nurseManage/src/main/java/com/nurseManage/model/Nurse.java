package com.nurseManage.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "Nurses")
@Data
@NoArgsConstructor
public class Nurse {
    @Id
    private String id;

    private String name;
    private Integer age;        
    private String gender;        
    private String department;    
    private String shift;        
    private String contact;      
    private String email;
    private String password;
}
