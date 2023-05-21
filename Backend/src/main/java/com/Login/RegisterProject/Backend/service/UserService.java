package com.Login.RegisterProject.Backend.service;

import com.Login.RegisterProject.Backend.dto.UserDTO;
import com.Login.RegisterProject.Backend.entity.User;

import java.util.List;

public interface UserService {
    void saveUser(UserDTO userDTO);
    User findUserByEmail(String email);
    List<UserDTO> findAllUsers();
}