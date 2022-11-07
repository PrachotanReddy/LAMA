package com.capstone.LoanAdminManagement.Service;

import com.capstone.LoanAdminManagement.Model.CustomerData;

import java.util.List;

public interface CustomerService {
    public List<CustomerData> getAllCustomer();
    public CustomerData addCustomer(CustomerData customer);
    public void deleteCustomer(int cid);
}
