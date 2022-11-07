package com.capstone.LoanAdminManagement.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.capstone.LoanAdminManagement.Model.CustomerData;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerDataRepository extends JpaRepository<CustomerData,Integer> {
}
