package com.bizwiz.post.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.bizwiz.post.DTO.CommentDTO;
import com.bizwiz.post.Exceptions.Personalized;
import com.bizwiz.post.Services.CommentService;

@Controller
@RequestMapping("/comments")
public class CommentController {

    @Autowired
    private CommentService commentService;

    @PostMapping("/create")
    public ResponseEntity<?> createComment(MultipartHttpServletRequest request) throws Personalized{
        // try {
        //     CommentDTO commentDTO = commentService.createComment(idPost, idUser, content);
        //     return ResponseEntity.ok(commentDTO);
        // } catch (Personalized e) {
        //     return ResponseEntity.badRequest().body(e.getMessage());
        // } catch (Exception e) {
        //     return ResponseEntity.internalServerError().body("Internal server error.");
        // }
        try {
            // Get the data from the request variable and set it on the corresponding variables
            // then create the postDTO calling the service "createPost" and return it.
            String content = request.getParameter("content");
            Long idPost = Long.parseLong(request.getParameter("idPost"));
            Long idUser = Long.parseLong(request.getParameter("idUser"));

        CommentDTO commentDTO = commentService.createComment(idUser, idPost, content);
            return ResponseEntity.ok(commentDTO);
        } catch (Personalized e) {
            // Catches the personalized exception message and returns it.
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            // Catches the Exception message and returns it.
            return ResponseEntity.internalServerError().body("Internal server error.");
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateComment(@PathVariable("id") Long id,
                                           @RequestParam String content) {
        try {
            CommentDTO commentDTO = commentService.updateComment(id, content);
            return ResponseEntity.ok(commentDTO);
        } catch (Personalized e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Internal server error.");
        }
    }

    @PutMapping("/delete/{id}")
    public ResponseEntity<?> deleteComment(@PathVariable("id") Long id) {
        try {
            String message = commentService.deleteComment(id);
            return ResponseEntity.ok(message);
        } catch (Personalized e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Internal server error.");
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getComment(@PathVariable("id") Long id) {
        try {
            CommentDTO commentDTO = commentService.getComment(id);
            return ResponseEntity.ok(commentDTO);
        } catch (Personalized e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Internal server error.");
        }
    }

    // @GetMapping("/post/{postId}")
    // public ResponseEntity<?> getAllCommentsForPost(@PathVariable("postId") Long postId) {
    //     try {
    //         return ResponseEntity.ok(commentService.getAllCommentsForPost(postId));
    //     } catch (Personalized e) {
    //         return ResponseEntity.badRequest().body(e.getMessage());
    //     } catch (Exception e) {
    //         return ResponseEntity.internalServerError().body("Internal server error.");
    //     }
    // }
}