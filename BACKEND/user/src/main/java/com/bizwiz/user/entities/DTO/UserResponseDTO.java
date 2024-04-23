package com.bizwiz.user.entities.DTO;

import com.bizwiz.user.entities.UserEntity;
import com.bizwiz.user.entities.enums.Role;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class UserResponseDTO {

    private Long idUser;
    private String username;
    private String lastName;
    private String firstName;
    private String email;
    private String phone;
    private String address;
    private Role role;

    public UserResponseDTO(UserEntity user) {
        this.idUser=user.getIdUser();
        this.username=user.getUsername();
        this.address= user.getAddress();
        this.email= user.getEmail();
        this.firstName= user.getFirstName();
        this.lastName= user.getLastName();
        this.phone=user.getPhone();
        this.role = user.getRole();
    }
}
