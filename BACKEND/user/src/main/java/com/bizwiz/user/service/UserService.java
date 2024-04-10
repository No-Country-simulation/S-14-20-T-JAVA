package com.bizwiz.user.service;

import com.bizwiz.user.Jwt.JwtService;
import com.bizwiz.user.config.auth.AuthResponse;
import com.bizwiz.user.config.auth.LoginRequest;
import com.bizwiz.user.config.auth.RegisterRequest;
import com.bizwiz.user.entities.DTO.UserRequestDTO;
import com.bizwiz.user.entities.DTO.UserResponseDTO;
import com.bizwiz.user.entities.UserEntity;
import com.bizwiz.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtService jwtService;

    @Transactional(readOnly = true)
    public Optional<List<UserResponseDTO>> listAll(){
        List<UserEntity> users = userRepository.findAll();
        return Optional.of(users.stream().map(UserResponseDTO::new).collect(Collectors.toList()));
    }

    @Transactional(readOnly = true)
    public Optional<UserResponseDTO> findById(Long id){
        Optional<UserEntity> user = userRepository.findById(id);
        return user.map(UserResponseDTO::new);
    }

    @Transactional(readOnly = true)
    public Optional<UserResponseDTO> findByUsername(String username){
        Optional<UserEntity> user = userRepository.findUserEntityByUsername(username);
        return user.map(UserResponseDTO::new);
    }

    @Transactional(readOnly = true)
    public Optional<List<UserResponseDTO>> findByFirstName(String firstName){
        List<UserEntity> users = userRepository.findUserEntityByFirstName(firstName);
        return Optional.of(users.stream().map(UserResponseDTO::new).collect(Collectors.toList()));
    }

    @Transactional(readOnly = true)
    public Optional<List<UserResponseDTO>> findByLastName(String lastName){
        List<UserEntity> users = userRepository.findUserEntityByLastName(lastName);
        return Optional.of(users.stream().map(UserResponseDTO::new).collect(Collectors.toList()));
    }

    @Transactional(readOnly = true)
    public Optional<UserResponseDTO> findByEmail(String email){
        Optional<UserEntity> user = userRepository.findUserEntityByEmail(email);
        return user.map(UserResponseDTO::new);
    }

    @Transactional(rollbackFor = Exception.class)
    public Optional<UserResponseDTO> updateUser(Long id, UserRequestDTO userUpdate) throws Exception {
        UserEntity userEntity = userRepository.findById(id).orElse(null);
        if (userEntity == null) throw new Exception("El usuario no se encuentra");
        try {
            if (userEntity != null) {
                if (userUpdate.getUsername() != null) userEntity.setUsername(userUpdate.getUsername());
                if (userUpdate.getFirstName() != null) userEntity.setFirstName((userUpdate.getFirstName()));
                if (userUpdate.getLastName() != null) userEntity.setLastName(userUpdate.getLastName());
                if (userUpdate.getAddress() != null) userEntity.setAddress(userUpdate.getAddress());
                if (userUpdate.getPhone() != null) userEntity.setPhone(userUpdate.getPhone());
                if (userUpdate.getEmail() != null) userEntity.setEmail(userUpdate.getEmail());

                userRepository.save(userEntity);

                return Optional.of(new UserResponseDTO(userEntity));
            }
        } catch (Exception e) {
            e.printStackTrace();
            throw new Exception("Error al actualizar usaurio");
        }
        return Optional.empty();
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

    /* Se crea el metodo login. Se recupera el usuario y se autentica buscandolo en la bd y se devuelve el usuario con el JWT. */
    public AuthResponse login(LoginRequest request){
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
        UserEntity user = userRepository.findUserEntityByUsername(request.getUsername())
                .orElseThrow(() -> new UsernameNotFoundException("El usuario no existe"));
        String token = jwtService.getToken(user);
        return AuthResponse.builder()
                .token(token)
                .build();
    }

    /* Creamos el metodo para registrar usuarios. Se devuelve el JWT del nuevo usuario. */
    public AuthResponse register(RegisterRequest request){
        UserEntity userEntity = UserEntity.builder()
                .username(request.getUsername())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(request.getRoles())
                .build();

        userRepository.save(userEntity);
        return AuthResponse.builder()
                .token(jwtService.getToken(userEntity))
                .build();
    }
}
