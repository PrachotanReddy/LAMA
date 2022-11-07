package com.capstone.LoanAdminManagement.Controller;


import com.capstone.LoanAdminManagement.Model.CustomerData;
import com.capstone.LoanAdminManagement.Service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class CustomerController {
    @Autowired
    CustomerService service;

    @DeleteMapping("/deleteCustomer/{cid}")
    public String deleteCustomer(@PathVariable("cid")int cid){
        service.deleteCustomer(cid);
        return "customer deleted";
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
