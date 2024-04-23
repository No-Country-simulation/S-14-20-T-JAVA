package com.bizwiz.post.DTO;

import java.io.Serializable;
import java.time.LocalDate;

import lombok.Data;

@Data
public class CommentDTO implements Serializable {

    private String content;
    private LocalDate date;
    private Long idUser;
    private Long idPost;
    private Long id;

    public CommentDTO(String content, LocalDate date, Long idUser, Long idPost, Long id) {
        this.content = content;
        this.date = date;
        this.idPost = idPost;
        this.idUser = idUser;
        this.id = id;
    }

}