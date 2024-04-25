package com.bizwiz.post.Services;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.bizwiz.post.DTO.ImageDTO;
import com.bizwiz.post.DTO.PostDTO;
import com.bizwiz.post.Entities.Image;
import com.bizwiz.post.Entities.PostEntity;
import com.bizwiz.post.Enums.Category;
import com.bizwiz.post.Enums.State;
import com.bizwiz.post.Exceptions.Personalized;
import com.bizwiz.post.Interfaces.PostInterface;
import com.bizwiz.post.Repositories.PostRepository;

import jakarta.transaction.Transactional;

@Service
public class PostService implements PostInterface {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private ImageService imageService;

    /**
     * Verify if the data of a post is valid.
     * 
     * @param postDTO
     * @throws Personalized
     */
    public void dataVerification(PostDTO postDTO) throws Personalized {

        if (postDTO == null) {
            throw new Personalized("Post cannot be null.");
        }
        if (postDTO.getTitle() == null || postDTO.getTitle().isEmpty()
                || postDTO.getTitle().trim().isEmpty()) {
            throw new Personalized("Title cannot be null or be empty.");
        }
        if (postDTO.getContent() == null || postDTO.getContent().isEmpty()
                || postDTO.getContent().trim().isEmpty()) {
            throw new Personalized("Content cannot be null or be empty.");
        }
    }

    /**
     * Verify if the state of a post is active or not.
     * 
     * @param id
     * @throws Personalized
     */
    public void StateVerification(Long id) throws Personalized {

        PostEntity post = postRepository.findById(id).orElse(null);

        if (post.getState() == State.INACTIVE) {
            throw new Personalized("This post is already been deleted.");
        }
    }

    /**
     * Create a new post.
     * 
     * @param postDTO
     * @throws Personalized
     * @return PostDTO
     */
    @Override
    @Transactional
    public PostDTO createPost(String title, String content, Long idUser, List<MultipartFile> images, String category)
            throws Personalized {

        try {

            // verify if the data of the post is valid by setting it to a PostDTO and then
            // sending this DTO to the verification method
            PostDTO postDTO = new PostDTO(title, content, null, null, null, null);
            dataVerification(postDTO);

            PostEntity post = new PostEntity();

            post.setState(State.ACTIVE);
            post.setDate(LocalDate.now());
            post.setContent(content);
            post.setTitle(title);
            post.setIdUser(idUser);
            post.setCategory(Category.valueOf(category));

            List<ImageDTO> imageDTO = new ArrayList<>();

            // a for iterator to save all images in the database and add it to the post
            // Array, also add every image to the imageDTO list
            // so later it will be returned with the postDTO.
            images.forEach((element) -> {
                try {
                    Image image = imageService.save(element);
                    image.setPost(post);
                    post.getImage().add(image);
                    imageDTO.add(new ImageDTO(image.getMime(), image.getName(), image.getContent(), post.getId()));
                } catch (Personalized e) {
                    e.printStackTrace();
                }
            });

            // save the post in the database
            postRepository.save(post);

            return new PostDTO(post.getTitle(), post.getContent(), imageDTO,
                    post.getDate(), post.getId(), post.getCategory().name());

        } catch (Exception e) {

            throw new Personalized("Error creating post: " + e.getMessage());

        }
    }

    /**
     * Update a post searching it by post id.
     * 
     * @param postEntity
     * @throws Personalized
     * @return PostDTO
     */
    @Override
    @Transactional
    public PostDTO updatePost(Long idPost, String title, String content) throws Personalized {

        try {
            // Verify if the data of the post is valid by setting it to a PostDTO and then
            // sending this DTO to the verification method, also we verify if the state is
            // active or not.
            dataVerification(new PostDTO(title, content, null, null, null));
            StateVerification(idPost);

            PostEntity post = postRepository.findById(idPost).orElse(null);

            post.setTitle(title);
            post.setContent(content);

            postRepository.save(post);

            List<ImageDTO> images = new ArrayList<>();

            // Iterator for all images and save it on the imageDTO list.
            for (Image image : post.getImage()) {

                ImageDTO imageDTO = new ImageDTO(image.getMime(), image.getName(), image.getContent(), post.getId());
                images.add(imageDTO);
            }

            return new PostDTO(post.getTitle(), post.getContent(), images, post.getDate(), post.getId());

        } catch (Exception e) {
            throw new Personalized("Error updating post: " + e.getMessage());
        }

    }

    /**
     * Delete a post searching it by post id.
     * 
     * @param idPost
     * @throws Personalized
     * @return String
     */
    @Override
    @Transactional
    public String deletePost(Long idPost) throws Personalized {

        try {
            // This method should be very simple to understand, checks if the post is active
            // and then in case of being active
            // do a logical delete.
            StateVerification(idPost);

            PostEntity post = postRepository.findById(idPost).orElse(null);

            post.setState(State.INACTIVE);
            postRepository.save(post);

            return "Post deleted";

        } catch (Exception e) {
            throw new Personalized("Error deleting post: " + e.getMessage());
        }
    }

    /**
     * Get all categories of a post.
     * @return
     */
    public List<String> getCategories() {
        return Arrays.stream(Category.values())
                .map(Enum::name)
                .collect(Collectors.toList());
    }

    /**
     * Get a post searching it by post id.
     * 
     * @param idPost
     * @throws Personalized
     * @return PostDTO
     */
    @Override
    public PostDTO getPost(Long idPost) throws Personalized {

        try {
            StateVerification(idPost);

            PostEntity post = postRepository.findById(idPost).orElse(null);

            List<ImageDTO> images = new ArrayList<>();

            for (Image image : post.getImage()) {

                ImageDTO imageDTO = new ImageDTO(image.getMime(), image.getName(), image.getContent(), post.getId());
                images.add(imageDTO);
            }

            return new PostDTO(post.getTitle(), post.getContent(), images, post.getDate(), post.getId(), post.getCategory().name());

        } catch (Exception e) {
            throw new Personalized("Error getting post: " + e.getMessage());
        }
    }

    /**
     * Get all posts of a user searching it by title.
     * 
     * @param title
     * @throws Personalized
     * @return ArrayList<PostDTO>
     */
    @Override
    public ArrayList<PostDTO> getPostsByTitle(String title) throws Personalized {

        try {

            // PageRequest is used to get only 10 posts, its like "LIMIT 10" on SQL.
            PageRequest pageRequest = PageRequest.of(0, 10);
            ArrayList<PostDTO> postsDTO = new ArrayList<>();
            List<ImageDTO> images = new ArrayList<>();

            for (PostEntity post : postRepository.findAllByTitle(title, pageRequest)) {
                for (Image image : post.getImage()) {
                    ImageDTO imageDTO = new ImageDTO(image.getMime(), image.getName(), image.getContent(),
                            post.getId());
                    images.add(imageDTO);
                }
                postsDTO.add(new PostDTO(post.getTitle(), post.getContent(), images, post.getDate(), post.getId(), post.getCategory().name()));
                images = new ArrayList<>();
            }

            return postsDTO;
        } catch (Exception e) {
            throw new Personalized("Error getting posts: " + e.getMessage());
        }
    }

    /**
     * Get all posts of a user searching it by user id.
     * 
     * @param idUser
     * @throws Personalized
     * @return ArrayList<PostDTO>
     */
    @Override
    public ArrayList<PostDTO> getAllPostsOfOneUser(Long idUser) throws Personalized {

        try {
            // Create a list for posts that this method will return and also a list for
            // images that a post could contain.
            ArrayList<PostDTO> postsDTO = new ArrayList<>();
            List<ImageDTO> images = new ArrayList<>();

            // First iterator its for all the posts that a user has done,
            // Verifications of post state is already done on the query in repository.
            for (PostEntity post : postRepository.findAllByIdUser(idUser)) {
                // Second iterator its for all the images that a post could contain, and add it
                // to the "images" list.
                for (Image image : post.getImage()) {
                    ImageDTO imageDTO = new ImageDTO(image.getMime(), image.getName(), image.getContent(),
                            post.getId());
                    images.add(imageDTO);
                }
                // Add the post and images to the "postsDTO" list, and then resets the "images"
                // list to evade errors.
                postsDTO.add(new PostDTO(post.getTitle(), post.getContent(), images, post.getDate(), post.getId(), post.getCategory().name()));
                images = new ArrayList<>();
            }

            return postsDTO;
        } catch (Exception e) {
            throw new Personalized("Error getting posts: " + e.getMessage());
        }
    }

}
