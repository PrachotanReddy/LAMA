package com.capstone.LoanAdminManagement.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capstone.LoanAdminManagement.Model.LoanCardData;
import com.capstone.LoanAdminManagement.Repository.LoanCardRepository;
import com.capstone.LoanAdminManagement.Service.LoanCardService;
import com.capstone.LoanAdminManagement.exception.ResourceNotFoundException;

@CrossOrigin()
@RestController
@RequestMapping("/LoanCard")

public class LoanCardController {
    @Autowired
    LoanCardService service;
    
    @Autowired
    private LoanCardRepository repo;
    
    @DeleteMapping("/{lid}")
    public ResponseEntity<HttpStatus> deleteLoanCard(@PathVariable int lid){
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

    @GetMapping("/all")
    public List<LoanCardData> showAllLoanCard(){
        return service.getAllLoanCard();
    }
    
    @GetMapping("/{lid}")
    public ResponseEntity<LoanCardData> getCustomerById(@PathVariable int lid){
    	   LoanCardData loanCard = repo.findById(lid)
           		.orElseThrow(() -> new ResourceNotFoundException("Loan Card does not exist with id: " + lid));
         return ResponseEntity.ok(loanCard);
    }

    @PostMapping("/")
    public LoanCardData addLoanCard(@RequestBody LoanCardData card) {
        return service.addLoanCard(card);
    }
}
