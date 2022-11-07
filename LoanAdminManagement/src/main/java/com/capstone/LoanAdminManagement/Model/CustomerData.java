package com.capstone.LoanAdminManagement.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.sql.Date;

@Entity
@Table(name="CutomerData")
public class CustomerData {
    @Id
    int EmployeeId;
    @Column
    String EmployeeName;
    @Column
    String Department;
    @Column
    String Gender;
    @Column
    String Designation;
    @Column
    Date DOB;
    @Column
    Date DOJ;

    public int getEmployeeId() {
        return EmployeeId;
    }

    public void setEmployeeId(int employeeId) {
        EmployeeId = employeeId;
    }

    public String getEmployeeName() {
        return EmployeeName;
    }

    public void setEmployeeName(String employeeName) {
        EmployeeName = employeeName;
    }

    public String getDepartment() {
        return Department;
    }

    public void setDepartment(String department) {
        Department = department;
    }

    public String getGender() {
        return Gender;
    }

    public void setGender(String gender) {
        Gender = gender;
    }

    public String getDesignation() {
        return Designation;
    }

    public void setDesignation(String designation) {
        Designation = designation;
    }

    public Date getDOB() {
        return DOB;
    }

    public void setDOB(Date DOB) {
        this.DOB = DOB;
    }

    public Date getDOJ() {
        return DOJ;
    }

    public void setDOJ(Date DOJ) {
        this.DOJ = DOJ;
    }

    public CustomerData() {
    }

    public CustomerData(int employeeId, String employeeName, String department, String gender, String designation, Date DOB, Date DOJ) {
        EmployeeId = employeeId;
        EmployeeName = employeeName;
        Department = department;
        Gender = gender;
        Designation = designation;
        this.DOB = DOB;
        this.DOJ = DOJ;
    }


}
