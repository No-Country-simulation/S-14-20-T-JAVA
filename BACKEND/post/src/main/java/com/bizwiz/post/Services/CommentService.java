package com.bizwiz.post.Services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bizwiz.post.DTO.CommentDTO;
import com.bizwiz.post.Entities.CommentEntity;
import com.bizwiz.post.Enums.State;
import com.bizwiz.post.Exceptions.Personalized;
import com.bizwiz.post.Repositories.CommentRepository;

@Service
public class CommentService {

    @Autowired
    private CommentRepository commentRepository;

    public CommentDTO createComment(Long idUser, Long idPost, String content) throws Personalized {
        try {
            CommentEntity commentEntity = new CommentEntity();
            commentEntity.setIdPost(idPost);
            commentEntity.setIdUser(idUser);
            commentEntity.setContent(content);
            commentEntity.setState(State.ACTIVE);

            commentRepository.save(commentEntity);

            return new CommentDTO(commentEntity.getContent(), commentEntity.getDate(), commentEntity.getIdUser(), commentEntity.getIdPost(), commentEntity.getId());
        } catch (Exception e) {
            throw new Personalized("Error creating comment: " + e.getMessage());
        }
    }

    

    public CommentDTO updateComment(Long id, String content) throws Personalized {
        try {
            CommentEntity commentEntity = commentRepository.findById(id).orElse(null);
            if (commentEntity == null) {
                throw new Personalized("Comment not found.");
            }
            commentEntity.setContent(content);
            commentRepository.save(commentEntity);

            return new CommentDTO(commentEntity.getContent(), commentEntity.getDate(), commentEntity.getIdUser(), commentEntity.getIdPost(),commentEntity.getId());
        } catch (Exception e) {
            throw new Personalized("Error updating comment: " + e.getMessage());
        }
    }

    public String deleteComment(Long id) throws Personalized {
        try {
            CommentEntity commentEntity = commentRepository.findById(id).orElse(null);
            if (commentEntity == null) {
                throw new Personalized("Comment not found.");
            }
            commentEntity.setState(State.INACTIVE);
            commentRepository.save(commentEntity);

            return "Comment deleted";
        } catch (Exception e) {
            throw new Personalized("Error deleting comment: " + e.getMessage());
        }
    }

    public CommentDTO getComment(Long id) throws Personalized {
        try {
            CommentEntity commentEntity = commentRepository.findById(id).orElse(null);
            if (commentEntity == null) {
                throw new Personalized("Comment not found.");
            }

            return new CommentDTO(commentEntity.getContent(), commentEntity.getDate(), commentEntity.getIdUser(), commentEntity.getIdPost(),commentEntity.getId());
        } catch (Exception e) {
            throw new Personalized("Error getting comment: " + e.getMessage());
        }
    }

    // public Iterable<CommentDTO> getAllCommentsForPost(Long postId) throws Personalized {
    //     try {
    //         Iterable<CommentEntity> comments = commentRepository.findAllById(postId);
    //         ArrayList<CommentDTO> commentDTOs = new ArrayList<>();
    //         for (CommentEntity commentEntity : comments) {
    //             commentDTOs.add(new CommentDTO(commentEntity.getContent(), commentEntity.getDate(), commentEntity.getIdUser(), commentEntity.getIdPost(),commentEntity.getId()));
    //         }
    //         return commentDTOs;
    //     } catch (Exception e) {
    //         throw new Personalized("Error getting comments for post: " + e.getMessage());
    //     }
    // }

}
