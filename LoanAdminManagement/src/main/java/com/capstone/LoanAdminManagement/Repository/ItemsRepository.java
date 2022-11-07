package com.capstone.LoanAdminManagement.Repository;

import com.capstone.LoanAdminManagement.Model.ItemsMasterData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemsRepository extends JpaRepository<ItemsMasterData,Integer> {
}
