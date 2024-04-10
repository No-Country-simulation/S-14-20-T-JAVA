package com.bizwiz.user.repository;

import com.bizwiz.user.entities.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<UserEntity, Long> {

     Optional<UserEntity> findUserEntityByUsername(String username);
     List<UserEntity> findUserEntityByFirstName(String username);
     List<UserEntity> findUserEntityByLastName(String username);
     Optional<UserEntity> findUserEntityByEmail(String username);

}
