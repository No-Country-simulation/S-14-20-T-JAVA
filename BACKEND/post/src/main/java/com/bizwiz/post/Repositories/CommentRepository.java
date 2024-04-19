package com.bizwiz.post.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bizwiz.post.Entities.CommentEntity;
import com.bizwiz.post.Entities.PostEntity;

@Repository
public interface CommentRepository extends JpaRepository<CommentEntity, Long> {
 
    List<CommentEntity> findAllByPost(PostEntity post);
}

