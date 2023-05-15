package com.Login.RegisterProject.Backend.repository;

import com.Login.RegisterProject.Backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import java.util.Optional;

@EnableJpaRepositories
public interface UserRepository  extends JpaRepository <User, Long> {
    Optional<User> findUserByEmailAndPassword(String email, String password);
    User findByEmail(String email);
}
