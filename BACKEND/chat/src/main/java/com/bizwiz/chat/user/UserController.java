package com.bizwiz.chat.user;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
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
            @Payload UserChat user){
        service.saveUser(user);
        return user;
    }

    @MessageMapping("/user.disconnectUser")
    @SendTo("/user/topic")
    public UserChat disconnect(
            @Payload UserChat user
    ){
        service.disconnect(user);
        return user;
    }

    @GetMapping("/users")
    public ResponseEntity<List<UserChat>> findConnectedUsers(){
        return ResponseEntity.ok(service.findConnectUsers());
    }

}
