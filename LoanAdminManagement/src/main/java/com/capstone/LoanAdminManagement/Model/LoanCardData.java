package com.capstone.LoanAdminManagement.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="LoanCardData")
public class LoanCardData {
    @Id
    int LoanId;
    @Column
    String LoanType;
    @Column
    int Duration;

    public LoanCardData() {
    }

    public LoanCardData(int loanId, String loanType, int duration) {
        LoanId = loanId;
        LoanType = loanType;
        Duration = duration;
    }

    public int getLoanId() {
        return LoanId;
    }

    public void setLoanId(int loanId) {
        LoanId = loanId;
    }

    public String getLoanType() {
        return LoanType;
    }

    public void setLoanType(String loanType) {
        LoanType = loanType;
    }

    public int getDuration() {
        return Duration;
    }

    public void setDuration(int duration) {
        Duration = duration;
    }
}
