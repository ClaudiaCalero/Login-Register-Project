package com.Login.RegisterProject.Backend.controller;

import com.Login.RegisterProject.Backend.entity.User;
import com.Login.RegisterProject.Backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    private UserRepository userRepository;

    @Autowired
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/register")
    public String registerUser(@RequestBody User user) {
        // Verifica si el usuario ya existe en la base de datos
        if (userRepository.findByEmail(user.getEmail()) != null) {
            return "This user already exists";
        }

        // Guarda el nuevo usuario en la base de datos
        userRepository.save(user);

        return "Successful registration: " + user.getEmail();
    }

    @PostMapping("/login")
    public String loginUser(@RequestBody User user) {
        // Busca el usuario en la base de datos por su email
        User existingUser = userRepository.findByEmail(user.getEmail());

        // Verifica si el usuario existe y la contraseña es correcta
        if (existingUser != null && existingUser.getPassword().equals(user.getPassword())) {
            return "Successful login: " + user.getEmail();
        }

        return "invalid credentials";
    }
}