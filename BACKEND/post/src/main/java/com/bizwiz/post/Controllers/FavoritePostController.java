package com.bizwiz.post.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bizwiz.post.Exceptions.Personalized;
import com.bizwiz.post.Services.FavoritePostsService;

@RestController
@RequestMapping("/posts/favorites")
public class FavoritePostController {

    @Autowired
    private FavoritePostsService favoritePostsService;

    /**
     * Create favorite post for one user.
     * @param idUser
     * @param idPost
     * @return
     * @throws Personalized
     */
    @PostMapping("/create")
    public ResponseEntity<?> createFavoritePostForOneUser(Long idUser, Long idPost) throws Personalized {

        try {
            return ResponseEntity.ok(favoritePostsService.createFavoritePost(idUser, idPost));
        } catch (Personalized e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Internal server error.");
        }
    }

    /**
     * Get all favorite posts from one user.
     * @param idUser
     * @return
     * @throws Personalized
     */
    @GetMapping("/get")
    public ResponseEntity<?> getFavoritePostsFromOneUser(Long idUser) throws Personalized {

        try {
            return ResponseEntity.ok(favoritePostsService.getFavoritePosts(idUser));
        } catch (Personalized e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Internal server error.");
        }
    }

    /**
     * Delete one favorite post from one user.
     * @param idUser
     * @param idPost
     * @return
     * @throws Personalized
     */
    @PutMapping("/delete")
    public ResponseEntity<?> deleteFavoritePostFromOneUser(Long idUser, Long idPost) throws Personalized {

        try {
            return ResponseEntity.ok(favoritePostsService.deleteFavoritePost(idUser, idPost));
        } catch (Personalized e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Internal server error.");
        }
    }

    /**
     * Delete all favorite posts from one user.
     * @param idUser
     * @return
     * @throws Personalized
     */
    @PutMapping("/delete/all")
    public ResponseEntity<?> deleteAllFavoritePostsFromOneUser(Long idUser) throws Personalized {

        try {
            return ResponseEntity.ok(favoritePostsService.deleteAllFavoritePosts(idUser));
        } catch (Personalized e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Internal server error.");
        }
    }
}
