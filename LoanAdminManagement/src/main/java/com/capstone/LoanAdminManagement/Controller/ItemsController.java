package com.capstone.LoanAdminManagement.Controller;

import com.capstone.LoanAdminManagement.Model.ItemsMasterData;
import com.capstone.LoanAdminManagement.Model.LoanCardData;
import com.capstone.LoanAdminManagement.Service.ItemsService;
import com.capstone.LoanAdminManagement.Service.LoanCardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ItemsController {
    @Autowired
    ItemsService service;
    @DeleteMapping("/deleteItem/{iid}")
    public String deleteItem(@PathVariable("iid")int iid){
        service.deleteItem(iid);
        return "item deleted";
    }

    @GetMapping("/allItems")
    public List<ItemsMasterData> showAllItems(){
        return service.getAllItems();
    }

    @PostMapping("/addItem")
    public ItemsMasterData addItem(@RequestBody ItemsMasterData item) {
        return service.addItem(item);
    }
}
