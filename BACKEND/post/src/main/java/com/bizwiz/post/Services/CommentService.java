package com.bizwiz.post.Services;

import java.time.LocalDate;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bizwiz.post.DTO.CommentDTO;
import com.bizwiz.post.Entities.CommentEntity;
import com.bizwiz.post.Entities.PostEntity;
import com.bizwiz.post.Enums.State;
import com.bizwiz.post.Exceptions.Personalized;
import com.bizwiz.post.Interfaces.CommentInterface;
import com.bizwiz.post.Repositories.CommentRepository;
import com.bizwiz.post.Repositories.PostRepository;

import jakarta.transaction.Transactional;

@Service
public class CommentService implements CommentInterface {

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private PostRepository postRepository;

    public void dataVerification(CommentDTO commentDTO) throws Personalized {

        if (commentDTO == null) {
            throw new Personalized("Comment cannot be null.");
        }
        if (commentDTO.getContent() == null || commentDTO.getContent().isEmpty()
                || commentDTO.getContent().trim().isEmpty()) {
            throw new Personalized("Content cannot be null or be empty.");
        }
    }

    public void StateVerification(Long id) throws Personalized {

        CommentEntity comment = commentRepository.findById(id).orElse(null);

        if (comment.getState() == State.INACTIVE) {
            throw new Personalized("This comment is already been deleted.");
        }
    }

    @Override
    @Transactional
    public CommentDTO createComment(Long idUser, Long idPost, String content) throws Personalized {
        try {
            PostEntity postEntity = postRepository.findById(idPost).orElse(null);
            if (postEntity == null) {
                throw new Personalized("Post not found.");
            }
            CommentDTO commentDTO = new CommentDTO(content, null, null, null, null);
            dataVerification(commentDTO);

            CommentEntity commentEntity = new CommentEntity();

            commentEntity.setPost(postEntity);
            commentEntity.setIdUser(idUser);
            commentEntity.setContent(content);
            commentEntity.setState(State.ACTIVE);
            commentEntity.setDate(LocalDate.now());
            commentRepository.save(commentEntity);

            return new CommentDTO(commentEntity.getContent(), commentEntity.getDate(), commentEntity.getIdUser(),
                    commentEntity.getPost().getId(), commentEntity.getId());
        } catch (Exception e) {
            throw new Personalized("Error creating comment: " + e.getMessage());
        }
    }

    @Override
    @Transactional
    public CommentDTO updateComment(Long idComment, String content) throws Personalized {
        try {
            dataVerification(new CommentDTO(content, null, null, null, null));
            StateVerification(idComment);

            CommentEntity commentEntity = commentRepository.findById(idComment).orElse(null);
            if (commentEntity == null) {
                throw new Personalized("Comment not found.");
            }

            commentEntity.setContent(content);
            commentRepository.save(commentEntity);

            return new CommentDTO(
                    commentEntity.getContent(),
                    commentEntity.getDate(),
                    commentEntity.getIdUser(),
                    (commentEntity.getPost() != null) ? commentEntity.getPost().getId() : null,
                    commentEntity.getId());
        } catch (Exception e) {
            throw new Personalized("Error updating comment: " + e.getMessage());
        }
    }

    @Override
    @Transactional
    public String deleteComment(Long idComment) throws Personalized {
        try {

            StateVerification(idComment);
            CommentEntity commentEntity = commentRepository.findById(idComment).orElse(null);
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

    @Override
    public CommentDTO getComment(Long idComment) throws Personalized {
        try {
            StateVerification(idComment);

            CommentEntity commentEntity = commentRepository.findById(idComment).orElse(null);
            if (commentEntity == null) {
                throw new Personalized("Comment not found.");
            }

            Long postId = (commentEntity.getPost() != null) ? commentEntity.getPost().getId() : null;

            return new CommentDTO(
                    commentEntity.getContent(),
                    commentEntity.getDate(),
                    commentEntity.getIdUser(),
                    postId,
                    commentEntity.getId());
        } catch (Exception e) {
            throw new Personalized("Error getting comment: " + e.getMessage());
        }
    }

    @Override
    public ArrayList<CommentDTO> getAllCommentsByPostId(Long idPost) throws Personalized {
        try {
            ArrayList<CommentDTO> commentsDTO = new ArrayList<>();

            for (CommentEntity comment : commentRepository.findAllByIdUser(idPost)) {

                CommentDTO commentDTO = new CommentDTO(
                        comment.getContent(),
                        comment.getDate(),
                        comment.getIdUser(),
                        (comment.getPost() != null) ? comment.getPost().getId() : null,
                        comment.getId());

                commentsDTO.add(commentDTO);
            }

            return commentsDTO;
        } catch (Exception e) {
            throw new Personalized("Error getting comments: " + e.getMessage());
        }
    }

}
