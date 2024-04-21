package com.bizwiz.post.Repositories;

import com.bizwiz.post.Entities.CommentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface CommentRepository extends JpaRepository<CommentEntity, Long> {

    @Query("SELECT p FROM CommentEntity p WHERE p.idUser = :id AND p.state = 'ACTIVE'")
    public ArrayList<CommentEntity> findAllByIdUser(@Param("id") Long idUser);

}
