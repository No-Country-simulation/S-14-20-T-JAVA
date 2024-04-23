package com.bizwiz.post.Repositories;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.bizwiz.post.Entities.FavoritePosts;

@Repository
public interface FavoritePostsRepository extends JpaRepository<FavoritePosts, Long> {
    
 @Query("SELECT f FROM FavoritePosts f WHERE f.idUser = :idUser AND f.idPost = :idP")   
 public FavoritePosts findByIdUserAndIdPost(@Param("idUser") Long idUser, @Param("idP") Long idPost);

 @Query("SELECT f FROM FavoritePosts f WHERE f.idUser = :id")
 public ArrayList<FavoritePosts> findAllByIdUser(@Param("id") Long id);
}
