package com.capstone.LoanAdminManagement.Controller;

import com.capstone.LoanAdminManagement.Model.LoanCardData;
import com.capstone.LoanAdminManagement.Repository.LoanCardRepository;
import com.capstone.LoanAdminManagement.Service.LoanCardService;
import com.capstone.LoanAdminManagement.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class LoanCardController {
    @Autowired
    LoanCardService service;
    @Autowired
    LoanCardRepository repo;
    @DeleteMapping("/deleteLoanCard/{lid}")
    public ResponseEntity<HttpStatus> deleteLoanCard(@PathVariable("lid")int lid){
        try
        {
            LoanCardData loanCard = repo.findById(lid)
                    .orElseThrow(() -> new ResourceNotFoundException("Loan Card does not exist with id: " + lid));
            service.deleteLoanCard(lid);

        }
        catch (Exception e) {
            System.out.println(e);
        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
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
