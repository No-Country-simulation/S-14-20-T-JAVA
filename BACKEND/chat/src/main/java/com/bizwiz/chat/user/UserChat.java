package com.bizwiz.chat.user;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@Document
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserChat {
    @Id
    private String nickName;
    private Status status;
}
