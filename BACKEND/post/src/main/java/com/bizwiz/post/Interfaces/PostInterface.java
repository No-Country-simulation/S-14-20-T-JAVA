package com.bizwiz.post.Interfaces;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.bizwiz.post.DTO.PostDTO;
import com.bizwiz.post.Exceptions.Personalized;

public interface PostInterface {

    public PostDTO createPost(String title, String content, Long idUser, List<MultipartFile> image, String category) throws Personalized;

    public PostDTO updatePost(Long idPost, String title, String content) throws Personalized;

    public String deletePost(Long idPost) throws Personalized;

    public PostDTO getPost(Long idPost) throws Personalized;

    public ArrayList<PostDTO> getPostsByTitle(String title) throws Personalized;

    public ArrayList<PostDTO> getAllPostsOfOneUser(Long idUser) throws Personalized;
}
