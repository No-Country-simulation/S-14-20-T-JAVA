package com.bizwiz.post.Interfaces;

import com.bizwiz.post.DTO.CommentDTO;
import com.bizwiz.post.Exceptions.Personalized;

import java.util.ArrayList;

public interface CommentInterface {

    public CommentDTO createComment(Long idPost, Long idUser, String content) throws Personalized;

    public CommentDTO updateComment(Long idComment, String content) throws Personalized;

    public String deleteComment(Long idComment) throws Personalized;

    public CommentDTO getComment(Long idComment) throws Personalized;

    public ArrayList<CommentDTO> getAllCommentsByPostId(Long idPost) throws Personalized;
}