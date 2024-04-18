package com.bizwiz.user;

import com.bizwiz.user.entities.UserEntity;
import com.bizwiz.user.entities.enums.Role;
import com.bizwiz.user.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;

import java.util.List;

@SpringBootApplication
@EnableDiscoveryClient
public class UserApplication {

	public static void main(String[] args) {
		SpringApplication.run(UserApplication.class, args);
	}

	@Bean
	CommandLineRunner init(UserRepository userRepository) {
		return args -> {

			//CREATE USERS
			UserEntity userElian = UserEntity.builder()
					.username("elian")
					.firstName("elian")
					.password("$2a$10$Rn5dqssiYpaiRiKA30Hi..3ZU38waxJ.JAcoPwV06nSk06S6Vk6ly")
					.role(Role.valueOf("ADMIN"))
					.build();
			UserEntity userPedro = UserEntity.builder()
					.username("pedro")
					.password("$2a$10$Rn5dqssiYpaiRiKA30Hi..3ZU38waxJ.JAcoPwV06nSk06S6Vk6ly")
					.role(Role.valueOf("USER"))
					.build();

			userRepository.saveAll(List.of(userElian, userPedro));
		};
	}
}
