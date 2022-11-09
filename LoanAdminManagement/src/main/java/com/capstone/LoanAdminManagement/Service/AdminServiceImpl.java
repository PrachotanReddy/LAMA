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
    public boolean checkCredentials(AdminData admin) {
    	AdminData Admin1 = repo.findByadminUserId(admin.getadminUserId());
    	return (admin.getadminPassword().equals(Admin1.getadminPassword()));
    }
    
}
