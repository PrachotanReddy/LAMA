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

import com.capstone.LoanAdminManagement.Model.ItemsMasterData;
import com.capstone.LoanAdminManagement.Repository.ItemsRepository;
import com.capstone.LoanAdminManagement.Service.ItemsService;
import com.capstone.LoanAdminManagement.exception.ResourceNotFoundException;

@CrossOrigin()
@RestController
@RequestMapping("/Items")

public class ItemsController {
    @Autowired
    ItemsService service;

    @Autowired
    private ItemsRepository repo;
    
    @GetMapping("/all")
    public List<ItemsMasterData> showallItems(){
        return service.getAllItems();
    }
    
    @DeleteMapping("/{iid}")
    public ResponseEntity<HttpStatus> deleteItem(@PathVariable int iid){
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
      
    @GetMapping("/{iid}")
    public ResponseEntity<ItemsMasterData> getItemById(@PathVariable int iid){
    	ItemsMasterData item = repo.findById(iid)
                .orElseThrow(() -> new ResourceNotFoundException("Item does not exist with id:" + iid));
        return ResponseEntity.ok(item);
    }
    public List<ItemsMasterData> showAllItems(){
        return service.getAllItems();
    }

    @PostMapping("/")
    public ItemsMasterData addItem(@RequestBody ItemsMasterData item) {
        return service.addItem(item);
    }
}
