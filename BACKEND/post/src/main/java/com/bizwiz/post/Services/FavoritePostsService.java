package com.bizwiz.post.Services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bizwiz.post.DTO.FavoritePostDTO;
import com.bizwiz.post.DTO.ImageDTO;
import com.bizwiz.post.DTO.PostDTO;
import com.bizwiz.post.Entities.FavoritePosts;
import com.bizwiz.post.Entities.Image;
import com.bizwiz.post.Entities.PostEntity;
import com.bizwiz.post.Exceptions.Personalized;
import com.bizwiz.post.Interfaces.FavoritePostInterface;
import com.bizwiz.post.Repositories.FavoritePostsRepository;
import com.bizwiz.post.Repositories.PostRepository;

import jakarta.transaction.Transactional;

@Service
public class FavoritePostsService implements FavoritePostInterface {

    @Autowired
    private FavoritePostsRepository favoritePostsRepository;

    @Autowired
    private PostService postService;

    /**
     * This method allows to verify the id's.
     * 
     * @param idUser
     * @param idPost
     * @throws Personalized
     */
    public void verifyData(Long idUser, Long idPost) throws Personalized {
        if (idUser == null || idPost == null) {
            throw new Personalized("Error: id cannot be null.");
        }
    }

    /**
     * This method should save the user and post id's on the database.
     * 
     * @param idUser
     * @param idPost
     * @return PostDTO
     * @throws Personalized
     */
    @Override
    @Transactional
    public PostDTO createFavoritePost(Long idUser, Long idPost) throws Personalized {

        try {
            verifyData(idUser, idPost);

            if (favoritePostsRepository.findByIdUserAndIdPost(idUser, idPost) != null) {
                throw new Personalized("Error: This post is already in your favorites.");
            }
            if (postService.getPost(idPost) == null) {
                throw new Personalized("Error: This post does not exist.");
            }

            FavoritePosts favoritePost = new FavoritePosts(idUser, idPost);
            favoritePostsRepository.save(favoritePost);

            return postService.getPost(idPost);
        } catch (Exception e) {
            throw new Personalized("Error: " + e.getMessage());
        }
    }

    /**
     * This method should return all posts from a user's favorites.
     * 
     * @param idUser
     * @return ArrayList<PostDTO>
     * @throws Personalized
     */
    @Override
    public ArrayList<PostDTO> getFavoritePosts(Long idUser) throws Personalized {

        try {
            ArrayList<PostDTO> DTO = new ArrayList<>();

            for (FavoritePosts post : favoritePostsRepository.findAllByIdUser(idUser)) {
                DTO.add(postService.getPost(post.getIdPost()));
            }

            return DTO;
        } catch (Exception e) {
            throw new Personalized("Error: " + e.getMessage());
        }
    }

    /**
     * This method should delete a post from a user's favorites.
     * 
     * @param idUser
     * @param idPost
     * @return ArrayList<PostDTO>
     * @throws Personalized
     */
    @Override
    @Transactional
    public ArrayList<PostDTO> deleteFavoritePost(Long idUser, Long idPost) throws Personalized {

        try {
            verifyData(idUser, idPost);
            FavoritePosts posts = favoritePostsRepository.findByIdUserAndIdPost(idUser, idPost);

            favoritePostsRepository.delete(posts);

            ArrayList<PostDTO> DTO = new ArrayList<>();

            for (FavoritePosts post : favoritePostsRepository.findAllByIdUser(idUser)) {
                DTO.add(postService.getPost(post.getIdPost()));
            }

            return DTO;
        } catch (Exception e) {
            throw new Personalized("Error: " + e.getMessage());
        }
    }

    /**
     * This method should delete all posts from a user's favorites.
     * 
     * @param idUser
     * @return ArrayList<PostDTO>
     * @throws Personalized
     */
    @Override
    @Transactional
    public ArrayList<PostDTO> deleteAllFavoritePosts(Long idUser) throws Personalized {

        try {
            for (FavoritePosts post : favoritePostsRepository.findAllByIdUser(idUser)) {
                favoritePostsRepository.delete(post);
            }

            ArrayList<PostDTO> DTO = new ArrayList<>();

            for (FavoritePosts post : favoritePostsRepository.findAllByIdUser(idUser)) {
                DTO.add(postService.getPost(post.getIdPost()));
            }

            return DTO;
        } catch (Exception e) {
            throw new Personalized("Error: " + e.getMessage());
        }
    }

}
