package com.example.backend.controller;

import com.example.backend.dto.UserDTO;
import com.example.backend.model.User;
import com.example.backend.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/v1/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private ModelMapper modelMapper;

    @PostMapping
    public ResponseEntity<?> createUser(@RequestBody UserDTO userDTO) {
        try {
            if (userDTO.getName() == null || userDTO.getEmail() == null || userDTO.getPassword() == null) {
                return ResponseEntity.badRequest().body("All fields are required");
            }
            User user = modelMapper.map(userDTO, User.class);
            User savedUser = userService.createUser(user);
            return ResponseEntity.ok(modelMapper.map(savedUser, UserDTO.class));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Internal server error");
        }
    }
}
