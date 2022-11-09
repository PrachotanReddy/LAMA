package com.capstone.LoanAdminManagement.Service;

import java.util.List;

import com.capstone.LoanAdminManagement.Model.AdminData;

public interface AdminService {
    public List<AdminData> getAllAdmin();
    public boolean checkCredentials(AdminData admin);
}
