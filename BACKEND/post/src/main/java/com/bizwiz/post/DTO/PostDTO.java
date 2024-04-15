package com.bizwiz.post.DTO;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import lombok.Data;

@Data
public class PostDTO implements Serializable {
    
    private String title;
    private String content;
    private List<ImageDTO> image = new ArrayList<>();
    private LocalDate date;
    private Long idUser;
    private Long id;

    public PostDTO(String title, String content, List<ImageDTO> image, LocalDate date, Long id) {
        this.title = title;
        this.content = content;
        this.image = image;
        this.date = date;
        this.id = id;
    }

}
