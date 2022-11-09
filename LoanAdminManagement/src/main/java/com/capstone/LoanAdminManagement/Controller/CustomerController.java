package com.capstone.LoanAdminManagement.Controller;


import com.capstone.LoanAdminManagement.Model.CustomerData;
import com.capstone.LoanAdminManagement.Repository.CustomerDataRepository;
import com.capstone.LoanAdminManagement.Service.CustomerService;
import com.capstone.LoanAdminManagement.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class CustomerController {
    @Autowired
    CustomerService service;
    @Autowired
    CustomerDataRepository repo;

    @DeleteMapping("/deleteCustomer/{cid}")
    public ResponseEntity<HttpStatus> deleteCustomer(@PathVariable("cid")int cid){
        try
        {
            CustomerData customer = repo.findById(cid)
                    .orElseThrow(() -> new ResourceNotFoundException("Customer does not exist with id: " + cid));
            service.deleteCustomer(cid);

        }
        catch (Exception e) {
            System.out.println(e);
        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/allCustomer")
    public List<CustomerData> showAllData(){
        return service.getAllCustomer();
    }

    @PostMapping("/addCustomer")
    public CustomerData addCustomer(@RequestBody CustomerData customer) {
        return service.addCustomer(customer);
    }
}
