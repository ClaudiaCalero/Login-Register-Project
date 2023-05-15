package com.Login.RegisterProject.Backend.repository;

import com.Login.RegisterProject.Backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}
