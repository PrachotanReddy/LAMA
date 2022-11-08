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

import com.capstone.LoanAdminManagement.Model.CustomerData;
import com.capstone.LoanAdminManagement.Repository.CustomerDataRepository;
import com.capstone.LoanAdminManagement.Service.CustomerService;
import com.capstone.LoanAdminManagement.exception.ResourceNotFoundException;

@CrossOrigin()
@RestController
@RequestMapping("/Customers")
public class CustomerController {
    @Autowired
    CustomerService service;
    
    @Autowired
    private CustomerDataRepository repo;
    
    @GetMapping("/all")
    public List<CustomerData> showallCustomer(){
        return service.getAllCustomer();
    }

    @PostMapping("/")
    public CustomerData addCustomer(@RequestBody CustomerData customer) {
        return service.addCustomer(customer);
    }
    
    @GetMapping("/{cid}")
    public ResponseEntity<CustomerData> getCustomerById(@PathVariable int cid){
    	CustomerData Customer = repo.findById(cid)
                .orElseThrow(() -> new ResourceNotFoundException("Customer does not exist with id:" + cid));
        return ResponseEntity.ok(Customer);
    }
    
    @DeleteMapping("/{cid}")
    public ResponseEntity<HttpStatus> deleteCustomer(@PathVariable int cid){
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


}
