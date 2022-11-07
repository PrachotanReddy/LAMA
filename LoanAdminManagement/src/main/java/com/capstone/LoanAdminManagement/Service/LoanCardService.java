package com.capstone.LoanAdminManagement.Service;

import com.capstone.LoanAdminManagement.Model.LoanCardData;

import java.util.List;

public interface LoanCardService {
    public List<LoanCardData> getAllLoanCard();
    public LoanCardData addLoanCard(LoanCardData card);
    public void deleteLoanCard(int lid);
}
