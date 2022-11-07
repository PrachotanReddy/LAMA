package com.capstone.LoanAdminManagement.Repository;

import com.capstone.LoanAdminManagement.Model.LoanCardData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoanCardRepository extends JpaRepository<LoanCardData,Integer> {
}
