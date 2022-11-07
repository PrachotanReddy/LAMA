package com.capstone.LoanAdminManagement.Service;

import com.capstone.LoanAdminManagement.Model.CustomerData;
import com.capstone.LoanAdminManagement.Repository.CustomerDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerServiceImpl implements CustomerService{
    @Autowired
    CustomerDataRepository repo;

    @Override
    public List<CustomerData> getAllCustomer() {
        return repo.findAll();
    }

    @Override
    public CustomerData addCustomer(CustomerData customer) {
        return repo.save(customer);
    }

    @Override
    public void deleteCustomer(int cid) {
        repo.deleteById(cid);
    }
}
