package com.bizwiz.user.controller;


import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class TestAuthController {

    @GetMapping("/hello")
    @PreAuthorize("permitAll()") //Con esta anotacion podemos elegir la autorizacion que vamos a poner en cada endpoint.
    public String hello(){
        return "Hello World Public";
    }

    @GetMapping("/helloSecured")
    public String helloSecured(){
        return "Hello Secured";
    }

    @GetMapping("/helloSecured2")
    public String helloSecured2(){
        return "Hello Secured2";
    }
}
