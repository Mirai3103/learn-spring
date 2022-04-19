package com.laffy.learnSpring.service;

import com.laffy.learnSpring.dao.DataAccessService;
import com.laffy.learnSpring.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class StudentService {
    private final DataAccessService dataAccessService;
    @Autowired
    public StudentService(DataAccessService dataAccessService) {
        this.dataAccessService = dataAccessService;
    }

    public List<Student> getAllStudents() {
        return dataAccessService.getAllStudents();
    }
    public void addNewStudent(UUID studentID, Student student) {
        UUID uuid = Optional.ofNullable(studentID).orElse(UUID.randomUUID());
        //ToDo: check if email already exists
        dataAccessService.addNewStudent(new Student(uuid, student.getFullName(), student.getEmail(), student.getGender()));
    }
}
