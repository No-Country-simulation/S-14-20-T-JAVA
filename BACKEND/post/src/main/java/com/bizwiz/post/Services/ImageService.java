package com.bizwiz.post.Services;

import com.bizwiz.post.Entities.Image;
import com.bizwiz.post.Exceptions.Personalized;
import com.bizwiz.post.Repositories.ImageRepository;

import jakarta.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class ImageService {

    @Autowired
    private ImageRepository imageRepository;

    public Image getOne(Long id) {
        return imageRepository.findById(id).orElse(null);
    }

    /**
     * Save a image to the database and returns it.
     * @param archive
     * @return Image
     * @throws Personalized
     */
    @Transactional
    public Image save(MultipartFile archive) throws Personalized {
        
        if (archive != null) {
            try {
                // The mime is the type of a image, name its the file name and the content its the bytes of the image.
                // This archive came like a "MultipartFile" from the frontend.
                Image image = new Image();
                image.setMime(archive.getContentType());               
                image.setName(archive.getOriginalFilename());               
                image.setContent(archive.getBytes());                
                imageRepository.save(image);
                
                return image;
            } catch (Exception e) {
                System.err.println( e.getMessage());
            }
        }
        return null;
    }
}
