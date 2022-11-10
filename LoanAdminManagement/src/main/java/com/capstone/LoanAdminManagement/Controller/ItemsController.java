package com.capstone.LoanAdminManagement.Controller;

import com.capstone.LoanAdminManagement.Model.ItemsMasterData;
import com.capstone.LoanAdminManagement.Model.LoanCardData;
import com.capstone.LoanAdminManagement.Repository.ItemsRepository;
import com.capstone.LoanAdminManagement.Service.ItemsService;
import com.capstone.LoanAdminManagement.Service.LoanCardService;
import com.capstone.LoanAdminManagement.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins="*")
public class ItemsController {
    @Autowired
    ItemsService service;
    @Autowired
    ItemsRepository repo;
    @DeleteMapping("/deleteItem/{iid}")
    public ResponseEntity<HttpStatus> deleteItem(@PathVariable("iid")int iid){
        try{
            ItemsMasterData item = repo.findById(iid)
                    .orElseThrow(() -> new ResourceNotFoundException("Item does not exist with id: " + iid));
            service.deleteItem(iid);
        }
        catch (Exception e) {
            System.out.println(e);
        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
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
