package com.bizwiz.post.Entities;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.bizwiz.post.Enums.State;

import jakarta.annotation.Nullable;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "comment_entity")
public class CommentEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "post_id")
    private PostEntity post;

    @Column(name = "post_id", insertable = false, updatable = false)
    private Long idPost; // Field to hold the ID of the post

    @Nullable
    @Column(name = "id_user")
    private Long idUser; 

    private String content;

    private LocalDate date;

    @Enumerated(EnumType.STRING)
    private State state;
    
    // Getter and Setter for postId
    public Long getPostId() {
        return post != null ? post.getId() : null;
    }


    
}

