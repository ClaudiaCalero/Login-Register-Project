package com.Login.RegisterProject.Backend.service;

import com.Login.RegisterProject.Backend.entity.LoginDTO;
import com.Login.RegisterProject.Backend.entity.UserDTO;

public interface UserService {
    String addUser(UserDTO userDTO);
    LoginMessage loginUser (LoginDTO loginDTO);
}
