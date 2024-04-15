package com.bizwiz.chat.user;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository respository;

    public void saveUser(UserChat user){
        user.setStatus(Status.ONLINE);
        respository.save(user);
    }

    public void disconnect(UserChat user){
        var storedUser = respository.findById(user.getNickName())
                .orElse(null);
        if(storedUser != null){
            storedUser.setStatus(Status.OFFLINE);
            respository.save(storedUser);
        }
    }

    public List<UserChat> findConnectUsers(){
        return respository.findAllByStatus(Status.ONLINE);
    }

}
