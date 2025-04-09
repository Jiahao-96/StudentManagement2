package com.antra.studentmanagement2.mapper;

import com.antra.studentmanagement2.pojo.Student;
import org.apache.ibatis.annotations.Mapper;

/**
 * stu management
 */
@Mapper
public interface StudentMapper {

    void addStudent(Student student);

    void deleteStudent(Integer id);

    void modStudent(Student student);

    Student getStudent(Integer id);
}
