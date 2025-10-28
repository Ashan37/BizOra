package com.example.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
    private Long id;  // ✅ must match entity type
    private String name;
    private String email;
    private String password;

    public Object getName() {
        return null;
    }
}
