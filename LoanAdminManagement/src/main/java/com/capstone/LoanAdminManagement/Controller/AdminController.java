package com.capstone.LoanAdminManagement.Controller;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.capstone.LoanAdminManagement.Model.AdminData;
import com.capstone.LoanAdminManagement.Repository.AdminRepository;
import com.capstone.LoanAdminManagement.Service.AdminServiceImpl;
import com.capstone.LoanAdminManagement.exception.ResourceNotFoundException;
@CrossOrigin("*")
@RestController

public class AdminController {
	
	
	  @GetMapping("/")
	    public String showLoginPage(){
	        return "loginPage";
	    }
	  
	  @GetMapping("/menu")
	    public String showMenuPage(){
		  
	        return "menupage";
	    }
	  @Autowired AdminServiceImpl AdminService;
	  
	  @Autowired AdminRepository Repo;
	  
	  @GetMapping("/login")
	  public void Login(@RequestBody AdminData Admin,HttpServletResponse response) throws IOException {
		  AdminData login = Repo.findByadminUserId(Admin.getadminUserId());
				 
		  try{
			  		  AdminData admin = Repo.findById(login.getId())
					  .orElseThrow(() -> new ResourceNotFoundException("Admin does not exist with Admin User id:" + login.getadminUserId()));
		  }
		  catch (Exception e) {
	            System.out.println(e);
	        }
				   
       	if (AdminService.checkCredentials(Admin))   response.sendRedirect("/menu");
       	else 
       		response.sendRedirect("/");
	  }
	  
} 
  