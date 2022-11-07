package com.capstone.LoanAdminManagement.Model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="ItemsMasterData")
public class ItemsMasterData {
    @Id
    int ItemId;
    @Column
    String ItemDescription;
    @Column
    String ItemStatus;
    @Column
    String ItemCategory;
    @Column
    int ItemValue;
    @Column
    String ItemMake;

    public ItemsMasterData() {
    }

    public ItemsMasterData(int itemId, String itemDescription, String itemStatus, String itemCategory, int itemValue, String itemMake) {
        ItemId = itemId;
        ItemDescription = itemDescription;
        ItemStatus = itemStatus;
        ItemCategory = itemCategory;
        ItemValue = itemValue;
        ItemMake = itemMake;
    }

    public int getItemId() {
        return ItemId;
    }

    public void setItemId(int itemId) {
        ItemId = itemId;
    }

    public String getItemDescription() {
        return ItemDescription;
    }

    public void setItemDescription(String itemDescription) {
        ItemDescription = itemDescription;
    }

    public String getItemStatus() {
        return ItemStatus;
    }

    public void setItemStatus(String itemStatus) {
        ItemStatus = itemStatus;
    }

    public String getItemCategory() {
        return ItemCategory;
    }

    public void setItemCategory(String itemCategory) {
        ItemCategory = itemCategory;
    }

    public int getItemValue() {
        return ItemValue;
    }

    public void setItemValue(int itemValue) {
        ItemValue = itemValue;
    }

    public String getItemMake() {
        return ItemMake;
    }

    public void setItemMake(String itemMake) {
        ItemMake = itemMake;
    }
}
