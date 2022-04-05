package com.example.api;

import com.example.domain.Greeting;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/")
@RequiredArgsConstructor
public class Controller {

    final ObjectMapper objectMapper;

    @GetMapping()
    @ResponseStatus(HttpStatus.OK)
    public Greeting index(){
        return new Greeting("Hi!");
    }
}
