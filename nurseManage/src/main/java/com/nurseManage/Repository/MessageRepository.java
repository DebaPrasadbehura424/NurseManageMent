package com.nurseManage.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.nurseManage.model.Message;

public interface MessageRepository extends MongoRepository<Message, String> {

}
