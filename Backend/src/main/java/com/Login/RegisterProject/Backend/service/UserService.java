package com.Login.RegisterProject.Backend.service;

import com.Login.RegisterProject.Backend.entity.User;

public interface UserService {
    User registerUser(User user);

    boolean loginUser(User user);
}
