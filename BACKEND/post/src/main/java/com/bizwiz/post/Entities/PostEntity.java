package com.bizwiz.post.Entities;

import java.time.LocalDate;

import jakarta.annotation.Nullable;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "post_entity")
public class PostEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // @ManyToOne
    // @JoinColumn(name = "user_id")
    // private UserEntity user; 

    @Nullable
    private String title;

    @Nullable
    private String content;

    @Column(name = "url_image")
    private String urlImage;

    @Nullable
    private LocalDate date;

    // @Enumerated(EnumType.STRING)
    // private enumState state;
    
}
