package com.bizwiz.chat.user;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface UserRepository extends MongoRepository<UserChat, Long> {
    List<UserChat> findAllByStatus(Status online);
}
