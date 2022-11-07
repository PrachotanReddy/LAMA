package com.capstone.LoanAdminManagement.Service;

import com.capstone.LoanAdminManagement.Model.ItemsMasterData;
import com.capstone.LoanAdminManagement.Repository.ItemsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemsServiceImpl implements ItemsService{

    @Autowired
    ItemsRepository repo;
    @Override
    public List<ItemsMasterData> getAllItems() {
        return repo.findAll();
    }

    @Override
    public ItemsMasterData addItem(ItemsMasterData item) {
        return repo.save(item);
    }

    @Override
    public void deleteItem(int iid) {
        repo.deleteById(iid);
    }
}
