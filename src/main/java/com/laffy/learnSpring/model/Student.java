package com.laffy.learnSpring.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.NotBlank;
import java.util.UUID;

public class Student {
    @NotBlank
    private final UUID id;
    private final String fullName;
    private final String email;
    private final Gender gender;

    public Student(@JsonProperty("id") UUID id, @JsonProperty("fullName") String fullName, @JsonProperty("email") String email, @JsonProperty("gender") Gender gender) {
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.gender = gender;
    }

    public enum Gender {
        MALE, FEMALE
    }

    public UUID getId() {
        return id;
    }

    public String getFullName() {
        return fullName;
    }

    public String getEmail() {
        return email;
    }

    public Gender getGender() {
        return gender;
    }

    @Override
    public String toString() {
        return "Student{" +
                "id=" + id +
                ", fullName='" + fullName + '\'' +
                ", email='" + email + '\'' +
                ", gender=" + gender +
                '}';
    }
}
