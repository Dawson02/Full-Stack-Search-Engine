package controller;

import finalsprint.controller.UserController;
import finalsprint.entities.User;
import finalsprint.entities.LoginRequest;
import finalsprint.repository.UserRepository;
import finalsprint.service.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

public class UserControllerTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private UserService userService;

    @InjectMocks
    private UserController userController;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testRegisterUser() {
        User newUser = new User();
        newUser.setUsername("testUser");
        newUser.setEmail("test@example.com");
        newUser.setPassword("password");

        when(userRepository.findByUsername(newUser.getUsername())).thenReturn(null);
        when(userRepository.findByEmail(newUser.getEmail())).thenReturn(null);
        when(userRepository.save(any(User.class))).thenReturn(newUser);

        ResponseEntity<?> responseEntity = userController.registerUser(newUser);

        assertEquals(HttpStatus.CREATED, responseEntity.getStatusCode());
        assertEquals(newUser, responseEntity.getBody());
    }

    @Test
    public void testLoginUser() {
        String username = "testUser";
        String password = "password";

        User user = new User();
        user.setUsername(username);
        user.setPassword(password);

        LoginRequest loginRequest = new LoginRequest();
        loginRequest.setUsername(username);
        loginRequest.setPassword(password);

        when(userRepository.findByUsername(username)).thenReturn(user);

        ResponseEntity<String> responseEntity = userController.loginUser(loginRequest);

        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals("Login successful", responseEntity.getBody());
    }
}