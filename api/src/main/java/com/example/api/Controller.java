package com.example.api;

import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/")
@CrossOrigin
@RequiredArgsConstructor
public class Controller {

    final ObjectMapper objectMapper;

    @GetMapping("")
    @ResponseStatus(HttpStatus.OK)
    public String get(){
        return "Hi";
    }

    @PostMapping("")
    @ResponseStatus(HttpStatus.OK)
    public String post(){
        return "Hey!";
    }
}
