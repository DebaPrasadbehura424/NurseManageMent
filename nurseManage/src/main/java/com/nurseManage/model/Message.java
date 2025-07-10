package com.nurseManage.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "message")
@Data
@NoArgsConstructor
public class Message {
    @Id
    private String id;

    private String name;
    private String email;
    private String mobileNumber;
    private String message;
}
