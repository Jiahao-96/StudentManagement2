package com.antra.studentmanagement2.controller;

import com.antra.studentmanagement2.pojo.Result;
import com.antra.studentmanagement2.pojo.Student;
import com.antra.studentmanagement2.service.StudentService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * stu Manage Controller
 */
@Slf4j
@RestController
@RequestMapping("/students")
public class StudentController {

    @Autowired
    private StudentService studentService;

    /**
     * add stu
     * @param student
     */
    @PostMapping
    public Result addStudent(@RequestBody Student student){
        log.info("creating student" + student);
        studentService.addStudent(student);
        return Result.success();
    }
    /**
     * delete stu
     * @param id
     */
    @DeleteMapping("/{id}")
    public Result delete(@PathVariable Integer id){
        log.info("deleting student" + id);
        studentService.deleteStudent(id);
        return Result.success();
    }
    /**
     * mod stu
     * @param student
     */
    @PutMapping
    public Result modify(@RequestBody Student student){
        log.info("modifying student" + student.getId());
        studentService.modifyStudent(student);
        return Result.success();
    }
    /**
     * search stu
     * @param id
     */
    @GetMapping("/{id}")
    public Result getStudent(@PathVariable Integer id){
        log.info("searching student for id:" + id);
        Student student = studentService.getStudent(id);
        return Result.success(student);
    }

}
