package com.capstone.LoanAdminManagement.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capstone.LoanAdminManagement.Model.AdminData;
import com.capstone.LoanAdminManagement.Repository.AdminRepository;

@Service
public class AdminServiceImpl implements AdminService{
    @Autowired
    AdminRepository repo;

    @Override
    public List<AdminData> getAllAdmin() {
        return repo.findAll();
    }
    
    @Override
    public AdminData login(String adminUserId) {
    	AdminData Admin = repo.findByadminUserId(adminUserId);
    	return Admin;
    }
}
