package com.capstone.LoanAdminManagement.Service;

import com.capstone.LoanAdminManagement.Model.LoanCardData;
import com.capstone.LoanAdminManagement.Repository.LoanCardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LoanCardServiceImpl implements LoanCardService{
    @Autowired
    LoanCardRepository repo;
    @Override
    public List<LoanCardData> getAllLoanCard() {
        return repo.findAll();
    }

    @Override
    public LoanCardData addLoanCard(LoanCardData card) {
        return repo.save(card);
    }

    @Override
    public void deleteLoanCard(int lid) {
        repo.deleteById(lid);
    }
}
