package com.bizwiz.user.service;

import com.bizwiz.user.entities.DTO.UserResponseDTO;
import com.bizwiz.user.entities.UserEntity;
import com.bizwiz.user.persistence.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private IUserRepository userRepository;
    @Transactional(readOnly = true)
    public Optional<List<UserResponseDTO>> listAll(){
        List<UserEntity> users = userRepository.findAll();
        if (users.isEmpty()) {
            return Optional.empty();
        }
        List<UserResponseDTO> listUserDTO = new ArrayList<>();
        users.forEach(user -> {
            UserResponseDTO userResponseDTO = new UserResponseDTO(user);
            listUserDTO.add(userResponseDTO);
        });
        return Optional.of(listUserDTO);
    }

    @Transactional(rollbackFor = Exception.class)
    public String deleteUser(Long id) throws Exception {
        try {
            Optional<UserEntity> user = userRepository.findById(id);
            if (user.isPresent()) {
                UserEntity userDelete = user.get();
                userDelete.setIsActive(false);
                userRepository.save(userDelete);
            } else {
                throw new Exception("No se ha encontrado el usuario");
            }
            return "Usuario eliminado correctamente";
        } catch (Exception e) {
            e.printStackTrace();
            throw new Exception("Error al eliminar el usuario con ID: " + id, e);
        }
    }
}
