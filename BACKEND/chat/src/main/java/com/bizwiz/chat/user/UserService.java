package com.bizwiz.chat.user;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository repository;

    public UserChat saveUser(String nickName){
        UserChat user = repository.findById(nickName).orElse(null);
        if(user == null) {
           user = UserChat.builder()
                    .nickName(nickName)
                    .status(Status.ONLINE)
                    .build();
        }
        user.setStatus(Status.ONLINE);
        repository.save(user);
        return user;
    }

    public UserChat disconnect(String nickName){
        var storedUser = repository.findById(nickName)
                .orElse(null);
        if(storedUser != null){
            storedUser.setStatus(Status.OFFLINE);
            repository.save(storedUser);
        }
        return storedUser;
    }

    public List<UserChat> findConnectUsers(){
        return repository.findAllByStatus(Status.ONLINE);
    }

}
