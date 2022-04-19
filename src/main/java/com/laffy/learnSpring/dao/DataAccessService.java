package com.laffy.learnSpring.dao;

import com.laffy.learnSpring.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Locale;
import java.util.UUID;
@Repository
public class DataAccessService {
    private final JdbcTemplate jdbcTemplate;
    @Autowired
    public DataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Student> getAllStudents() {
        String sql = "SELECT * FROM student";
        return   this.jdbcTemplate.query(sql, mapStudentFormDB());
    }

    private RowMapper<Student> mapStudentFormDB() {
        return (resultSet, i) -> {
            UUID id = UUID.fromString(resultSet.getString("id"));
            String name = resultSet.getString("name");
            String email = resultSet.getString("email");
            Student.Gender gender = Student.Gender.valueOf((resultSet.getString("gender").toUpperCase().trim()  ));
            return new Student(id, name, email, gender);
        };
    }
    public void addNewStudent(Student a){

    }
}
