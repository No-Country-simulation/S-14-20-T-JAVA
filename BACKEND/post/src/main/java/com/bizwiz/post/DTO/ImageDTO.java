package com.bizwiz.post.DTO;

import lombok.Data;

@Data
public class ImageDTO {
    
    private String mime;
    private String name;
    private byte[] content;
    private Long idPost;

    public ImageDTO(String mime, String name, byte[] content, Long idPost) {
        this.mime = mime;
        this.name = name;
        this.content = content;
        this.idPost = idPost;
    }
    
}
