package com.bizwiz.chat.user;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends MongoRepository<UserChat, String> {
    List<UserChat> findAllByStatus(Status online);
}
