package com.bizwiz.post.Interfaces;

import java.util.ArrayList;

import com.bizwiz.post.DTO.PostDTO;
import com.bizwiz.post.Exceptions.Personalized;

public interface FavoritePostInterface {
    
    public ArrayList<PostDTO> deleteFavoritePost(Long idUser, Long idPost) throws Personalized;

    public PostDTO createFavoritePost(Long idUser, Long idPost) throws Personalized;

    public ArrayList<PostDTO> getFavoritePosts(Long idUser) throws Personalized;

    public ArrayList<PostDTO> deleteAllFavoritePosts(Long idUser) throws Personalized;

}
