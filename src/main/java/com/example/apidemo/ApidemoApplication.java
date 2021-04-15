package com.example.apidemo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ApidemoApplication {

	public static void main(final String[] args) {
		System.out.println("Application started!");
		SpringApplication.run(ApidemoApplication.class, args);
	}

}
