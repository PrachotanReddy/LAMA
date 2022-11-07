package com.capstone.LoanAdminManagement.Service;

import com.capstone.LoanAdminManagement.Model.ItemsMasterData;

import java.util.List;

public interface ItemsService {
    public List<ItemsMasterData> getAllItems();
    public ItemsMasterData addItem(ItemsMasterData item);
    public void deleteItem(int iid);
}
