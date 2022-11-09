package com.capstone.LoanAdminManagement.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="AdminData")

public class AdminData {

	  @Id
	  private int id;
	  public int getId() {
		return id;
	}
	  @Column(nullable = false)
	  private String adminUserId;
	  @Column(nullable = false, length = 64)
	  private String adminPassword;
	  public String getadminUserId() {
		return adminUserId;
	  }
	  public String getadminPassword() {
		return adminPassword;
	  }  
}
