package com.example.backend.controller;

import com.example.backend.dto.UserDTO;
import com.example.backend.model.User;
import com.example.backend.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin
@RequestMapping(value = "api/v1/users")

public class UserController {
   @Autowired
    private UserService userService;

   @Autowired
    private ModelMapper modelMapper;

   @GetMapping
    public List<UserDTO> getAllUsers(){
       return userService.getAllUsers().stream().map(user->modelMapper.map(user,UserDTO.class)).collect(Collectors.toList());
   }
   @GetMapping("/{id}")
    public UserDTO getUserById(@PathVariable Long id){
       User user=userService.getUserById(id);

       return user!=null?modelMapper.map(user,UserDTO.class):null;
   }
   @PostMapping
    public UserDTO createUser(@RequestBody UserDTO userDTO){
       User user=modelMapper.map(userDTO, User.class);
       User savedUser=userService.createUser(user);

       return modelMapper.map(savedUser,UserDTO.class);
   }
   @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable Long id){
       userService.deleteUser(id);
       return "User deleted successfully!";
   }
}
