package com.bizwiz.user.repository;

import com.bizwiz.user.entities.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<UserEntity, Long> {

     Optional<UserEntity> findUserEntityByUsername(String username);
     //Optional<UserEntity> findUserEntityByUsername(String username);
     @Query("SELECT u FROM UserEntity u WHERE u.username IS NOT NULL AND u.username LIKE %:urlUsername%")
     Optional<List<UserEntity>> findUsersByUsername(@Param("urlUsername") String username);
     List<UserEntity> findUserEntityByFirstName(String firstName);
     List<UserEntity> findUserEntityByLastName(String lastName);
     Optional<UserEntity> findUserEntityByEmail(String email);

}
