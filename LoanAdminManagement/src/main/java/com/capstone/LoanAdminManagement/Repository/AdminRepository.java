package com.capstone.LoanAdminManagement.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.capstone.LoanAdminManagement.Model.AdminData;

@Repository
public interface AdminRepository extends JpaRepository<AdminData,Integer> {

	AdminData findByadminUserId(String getadminUserId);

}
