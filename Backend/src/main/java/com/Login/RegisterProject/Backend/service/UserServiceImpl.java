package com.Login.RegisterProject.Backend.service;

import com.Login.RegisterProject.Backend.entity.User;
import com.Login.RegisterProject.Backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;

    @Autowired
    public UserServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public User registerUser(User user) {
        // Verifica si el usuario ya existe en la base de datos
        if (userRepository.findByEmail(user.getEmail()) != null) {
            return null; // Usuario ya existe, retorna null
        }

        // Encripta la contraseña antes de guardarla en la base de datos
        String encodedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);

        // Guarda el nuevo usuario en la base de datos
        return userRepository.save(user);
    }

    @Override
    public boolean loginUser(User user) {
        // Busca el usuario en la base de datos porsu email
        User existingUser = userRepository.findByEmail(user.getEmail());
        // Verifica si el usuario existe y la contraseña es correcta
        if (existingUser != null) {
            // Compara la contraseña ingresada con la contraseña almacenada en la base de datos
            return passwordEncoder.matches(user.getPassword(), existingUser.getPassword());
        }
        return false;
    }
}