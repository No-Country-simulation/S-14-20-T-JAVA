package com.bizwiz.post.Entities;


import jakarta.annotation.Nullable;
import jakarta.persistence.Basic;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Image {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Nullable
    private String mime;
    
    @Nullable
    private String name;
    
    @Lob
    @Column(columnDefinition="LONGBLOB")
    @Basic(fetch = FetchType.LAZY)
    private byte[] content;

    @ManyToOne
    @JoinColumn(name = "post_id")
    private PostEntity post;
}
