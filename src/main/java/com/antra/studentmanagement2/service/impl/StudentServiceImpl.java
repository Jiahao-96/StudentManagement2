package com.antra.studentmanagement2.service.impl;
import com.antra.studentmanagement2.mapper.StudentMapper;
import com.antra.studentmanagement2.pojo.Student;
import com.antra.studentmanagement2.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentMapper studentMapper;

    /**
     * add stu
     *
     * @param student
     */
    @Override
    public void addStudent(Student student) {
        studentMapper.addStudent(student);
    }

    /**
     * delete stu
     *
     * @param id
     */
    @Override
    public void deleteStudent(Integer id) {
        studentMapper.deleteStudent(id);
    }

    /**
     * mod stu
     *
     * @param student
     */
    @Override
    public void modifyStudent(Student student) {
        studentMapper.modStudent(student);
    }

    /**
     * search stu
     */
    @Override
    public List<Student> getStudents() {
        return studentMapper.getStudents();
    }


}
