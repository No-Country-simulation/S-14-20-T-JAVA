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
@RequestMapping("/posts/comments")
public class CommentController {

    @Autowired
    private CommentService commentService;

    @PostMapping("/create")
    public ResponseEntity<?> createComment(MultipartHttpServletRequest request) throws Personalized {

        try {

            String content = request.getParameter("content");
            Long idPost = Long.parseLong(request.getParameter("idPost"));
            Long idUser = Long.parseLong(request.getParameter("idUser"));

            CommentDTO commentDTO = commentService.createComment(idUser, idPost, content);
            return ResponseEntity.ok(commentDTO);
        } catch (Personalized e) {

            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {

            return ResponseEntity.internalServerError().body("Internal server error.");
        }
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateComment(@RequestParam Long idComment,
    String content) throws Personalized {
        try {
            return ResponseEntity.ok(commentService.updateComment(idComment, content));
        } catch (Personalized e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Internal server error.");
        }
    }
    
    @PutMapping("/delete")
    public ResponseEntity<?> deleteComment(@RequestParam Long idComment) throws Personalized {
        try {
            return ResponseEntity.ok(commentService.deleteComment(idComment));
        } catch (Personalized e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Internal server error.");
        }
    }
    
    @GetMapping("/get")
    public ResponseEntity<?> getComment(@RequestParam Long idComment) throws Personalized {
        try {
            return ResponseEntity.ok(commentService.getComment(idComment));
        } catch (Personalized e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Internal server error.");
        }
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllCommentsByPostId(@RequestParam Long idPost) throws Personalized {

        try {
            return ResponseEntity.ok(commentService.getAllCommentsByPostId(idPost));
        } catch (Personalized e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Internal server error.");
        }
    }
}