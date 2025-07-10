package com.nurseManage.controller;

import org.springframework.web.bind.annotation.RestController;

import com.nurseManage.Repository.MessageRepository;
import com.nurseManage.model.Message;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api/msg")
public class MessageController {

    @Autowired
    private MessageRepository messageRepository;

    @PostMapping("/sendMessage")
    public ResponseEntity<Message> sendMessage(@RequestBody Message message) {
        if (message == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        Message savedMessage = messageRepository.save(message);
        return new ResponseEntity<>(savedMessage, HttpStatus.CREATED);
    }

    @PostMapping("/delMessage")
    public ResponseEntity<Void> delMessage(@RequestBody String id) {
        Optional<Message> message = messageRepository.findById(id);
        if (message.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        messageRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/getAllMessages")
    public ResponseEntity<List<Message>> getAllMessages() {
        List<Message> messages = messageRepository.findAll();
        return new ResponseEntity<>(messages, HttpStatus.OK);
    }

}
