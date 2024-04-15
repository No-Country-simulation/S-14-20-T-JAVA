package com.bizwiz.post.Repositories;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.bizwiz.post.Entities.PostEntity;

@Repository
public interface PostRepository extends JpaRepository<PostEntity, Long>{
 
    @Query("SELECT p FROM PostEntity p WHERE p.idUser = :id AND p.state = 'ACTIVE'")
    public ArrayList<PostEntity> findAllByIdUser(@Param("id") Long idUser);
}
