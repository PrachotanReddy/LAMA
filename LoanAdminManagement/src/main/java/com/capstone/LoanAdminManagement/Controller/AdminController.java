package com.capstone.LoanAdminManagement.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.capstone.LoanAdminManagement.Model.AdminData;
import com.capstone.LoanAdminManagement.Repository.AdminRepository;
import com.capstone.LoanAdminManagement.Service.AdminService;
import com.capstone.LoanAdminManagement.exception.ResourceNotFoundException;
@CrossOrigin("*")
@RestController

public class AdminController {
	 	@Autowired AdminService AdminService;
	  
	  @Autowired AdminRepository Repo;
	 
	  
	  @PostMapping("/login")
	  public String Login(@RequestBody(required = false) AdminData Admin) {
		  AdminData login = Repo.findByadminUserId(Admin.getadminUserId() );
				 
		  try{
			  		  AdminData admin = Repo.findById(login.getId())
					  .orElseThrow(() -> new ResourceNotFoundException("Admin does not exist with Admin User id:" + login.getadminUserId()));
		  }
		  catch (Exception e) {
	            System.out.println(e);
	        }
				   
       	if (AdminService.checkCredentials(Admin))
       		{
       		if (Admin.isLoggedin()) 	return "Already Logged in";
       		else {
       			Admin.setLoggedin(true);
       			return "Login Successful";
       		}
       		}
       	else 
       		return "Login Unsuccessful";
   	  }
	  
	  @GetMapping("/logout")
	  public String Logout(@RequestParam String adminUserId) {
		  	AdminData Admin = Repo.findByadminUserId(adminUserId);
		  	Admin.setLoggedin(false);
		  	return "Logout successful";
	  }
	  
	  
} 
  