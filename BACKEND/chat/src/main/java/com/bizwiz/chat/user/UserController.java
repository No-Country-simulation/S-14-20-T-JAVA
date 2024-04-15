package com.bizwiz.chat.user;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageExceptionHandler;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class UserController {
    private final UserService service;

    @MessageMapping("/user.addUser")
    @SendTo("/user/topic")
    public UserChat addUser(
            @Payload String nickName) {
        try {
            UserChat user = service.saveUser(nickName);
            return user;
        } catch (Exception e) {
            // Manejar la excepción y mostrarla en la consola
            e.printStackTrace();
            return null; // O devuelve un valor que indique un error
        }
    }

    @MessageMapping("/user.disconnectUser")
    @SendTo("/user/topic")
    public UserChat disconnect(
            @Payload String nickName
    ) {
        try {
            UserChat user = service.disconnect(nickName);
            return user;
        } catch (Exception e) {
            // Manejar la excepción y mostrarla en la consola
            e.printStackTrace();
            return null; // O devuelve un valor que indique un error
        }
    }

    @GetMapping("/users")
    public ResponseEntity<List<UserChat>> findConnectedUsers() {
        try {
            List<UserChat> connectedUsers = service.findConnectUsers();
            return ResponseEntity.ok(connectedUsers);
        } catch (Exception e) {
            // Manejar la excepción y mostrarla en la consola
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @MessageExceptionHandler(Exception.class)
    public void handleException(Exception e) {
        // Manejar la excepción aquí y mostrarla en la consola
        e.printStackTrace();
    }
}
