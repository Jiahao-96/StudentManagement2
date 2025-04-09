package com.antra.studentmanagement2.service;



import com.antra.studentmanagement2.pojo.Student;
import java.util.List;

/**
 * stu management
 */
public interface StudentService {

    /**
     * delete stu
     * @param id
     */
    void deleteStudent(Integer id);

    /**
     * add stu
     * @param student
     */
    void addStudent(Student student);


    /**
     * mod stu
     * @param student
     */
    void modifyStudent(Student student);

    /**
     * search stu
     * @param id
     */
    Student getStudent(Integer id);


}
