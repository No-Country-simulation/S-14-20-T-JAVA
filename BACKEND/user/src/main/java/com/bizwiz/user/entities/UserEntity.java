package com.bizwiz.user.entities;

import com.bizwiz.user.entities.enums.Role;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
//import org.springframework.security.core.userdetails.UserDetails;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserEntity /*implements UserDetails*/ {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idUser;

    @NotEmpty(message = "El usuario no puede estar vacío")
    private String username;

    @NotEmpty(message = "El apellido no puede estar vacío")
    private String lastName;

    @NotEmpty(message = "El nombre de usuario no puede estar vacío")
    private String firstName;

    @Column(unique = true)
    @NotEmpty(message = "El email no puede estar vacío")
    @Email
    private String email;

    @NotEmpty(message = "La contraseña no puede estar vacía")
    private String password;

    @Size(max=20)
    private String phone;

    private String address;

    @Enumerated(EnumType.STRING)
    private Role role;

}
