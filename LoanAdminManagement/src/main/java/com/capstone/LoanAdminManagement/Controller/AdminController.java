package com.capstone.LoanAdminManagement.Controller;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.capstone.LoanAdminManagement.Model.AdminData;
import com.capstone.LoanAdminManagement.Service.AdminServiceImpl;
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
	  
	  @PostMapping("/login")
	  public void Login(@RequestBody AdminData Admin,HttpServletResponse response) throws IOException {
		   AdminData login = AdminService.login(Admin.getadminUserId());
       	if (login.getadminPassword().equals(Admin.getadminPassword()))   response.sendRedirect("/menu");
       	else 
       		response.sendRedirect("/");
	  }
	  
} 
  