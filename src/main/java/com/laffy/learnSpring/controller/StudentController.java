package com.laffy.learnSpring.controller;

import com.laffy.learnSpring.model.Student;
import com.laffy.learnSpring.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.Console;
import java.util.List;
import java.util.UUID;


@RestController
@RequestMapping("students")
public class StudentController {
    private final StudentService studentService;
    @Autowired
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }
    @PostMapping
    public void addStudent(@RequestBody Student student) {
        studentService.addNewStudent(student.getId(),student);
    }
}
