package com.bizwiz.post.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.bizwiz.post.DTO.PostDTO;
import com.bizwiz.post.Exceptions.Personalized;
import com.bizwiz.post.Services.PostService;

@Controller
@RequestMapping("/posts")
public class PostController {

    @Autowired
    private PostService postService;

    /**
     * Gets a MultipartHTTPServletRequest and creates a new post.
     * this Multipart should have the next name of variables: title, content, idUser and images. 
     * @param request
     * @return ResponseEntity
     * @throws Personalized
     */
    @PostMapping("/create")
    public ResponseEntity<?> createPost(MultipartHttpServletRequest request) throws Personalized {

        try {
            // Get the data from the request variable and set it on the corresponding variables
            // then create the postDTO calling the service "createPost" and return it.
            String title = request.getParameter("title");
            String content = request.getParameter("content");
            String category = request.getParameter("category");
            Long idUser = Long.parseLong(request.getParameter("idUser"));

            List<MultipartFile> imagesList = request.getFiles("images");

            PostDTO postDTO = postService.createPost(title, content, idUser, imagesList, category);
            return ResponseEntity.ok(postDTO);
        } catch (Personalized e) {
            // Catches the personalized exception message and returns it.
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            // Catches the Exception message and returns it.
            return ResponseEntity.internalServerError().body("Internal server error.");
        }
    }

    /**
     * This API should find the post using the "idPost" parameter and then if the state is active,
     * it should update the title and content.
     * @param idPost
     * @param title
     * @param content
     * @return ResponseEntity
     * @throws Personalized
     */
    @PutMapping("/update")
    public ResponseEntity<?> updatePost(@RequestParam Long idPost,
            String title, String content) throws Personalized {

        try {
            return ResponseEntity.ok(postService.updatePost(idPost, title, content));
        } catch (Personalized e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Internal server error.");
        }
    }

    /**
     * This API should find the post using the "idPost" parameter and then if the state is active,
     * it should do a logical delete.
     * @param idPost
     * @return ResponseEntity
     * @throws Personalized
     */
    @DeleteMapping("/delete")
    public ResponseEntity<?> deletePost(@RequestParam Long idPost) throws Personalized {

        try {
            return ResponseEntity.ok(postService.deletePost(idPost));
        } catch (Personalized e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Internal server error.");
        }
    }

    /**
     * This API should return all categories for a post.
     * @return
     */
    @GetMapping("/categories")
    public ResponseEntity<?> getCategories() {
        
        try {
            return ResponseEntity.ok(postService.getCategories());
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Internal server error.");
        }
    }

    /**
     * This API should find the post using the "idPost" parameter.
     * @param idPost
     * @return ResponseEntity
     * @throws Personalized
     */
    @GetMapping("/get")
    public ResponseEntity<?> getPostFromOneUser(@RequestParam Long idPost) throws Personalized {

        try {
            return ResponseEntity.ok(postService.getPost(idPost));
        } catch (Personalized e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Internal server error.");
        }
    }

    /**
     * This API should find all active posts using the "title" parameter.
     * @param title
     * @return ResponseEntity
     * @throws Personalized
     */
    @GetMapping("/get/posts/{title}")
    public ResponseEntity<?> getPosts(@PathVariable String title) throws Personalized {

        try {
            return ResponseEntity.ok(postService.getPostsByTitle(title));
        } catch (Personalized e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Internal server error.");
        }
    }

    /**
     * This API should find all active posts from a user using the "idUser" parameter.
     * @param idUser
     * @return ResponseEntity
     * @throws Personalized
     */
    @GetMapping("/all")
    public ResponseEntity<?> getAllPostsFromOneUser(@RequestParam Long idUser) throws Personalized {

        try {
            return ResponseEntity.ok(postService.getAllPostsOfOneUser(idUser));
        } catch (Personalized e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Internal server error.");
        }
    }

}
