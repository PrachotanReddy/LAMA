package com.capstone.LoanAdminManagement.Controller;

import com.capstone.LoanAdminManagement.Model.LoanCardData;
import com.capstone.LoanAdminManagement.Service.LoanCardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class LoanCardController {
    @Autowired
    LoanCardService service;
    @DeleteMapping("/deleteLoanCard/{lid}")
    public String deleteLoanCard(@PathVariable("lid")int lid){
        service.deleteLoanCard(lid);
        return "loan card deleted";
    }

    @GetMapping("/allLoanCard")
    public List<LoanCardData> showAllLoanCard(){
        return service.getAllLoanCard();
    }

    @PostMapping("/addLoanCard")
    public LoanCardData addLoanCard(@RequestBody LoanCardData card) {
        return service.addLoanCard(card);
    }
}
