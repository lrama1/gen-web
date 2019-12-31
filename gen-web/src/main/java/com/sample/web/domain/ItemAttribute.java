package com.sample.web.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.persistence.UniqueConstraint;

import org.hibernate.annotations.GenericGenerator;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;


/**
 * ItemAttribute entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name="ITEM_ATTRIBUTE"
    ,schema="PUBLIC"
    ,catalog="PUBLIC"
, uniqueConstraints = @UniqueConstraint(columnNames={"ITEM_ID", "ITEM_ATTR_ID", "ITEM_ATTR_TYPE_ID"})
)
@JsonIdentityInfo(generator=ObjectIdGenerators.IntSequenceGenerator.class, property="@id")

public class ItemAttribute  implements java.io.Serializable {


    // Fields    

     private String itemAttrId;
     
     //@JsonBackReference
     private Item item;
     
     private String itemAttrValue;
     
     private ItemAttributeType itemAttrType;
     
     private String itemAttrDisplayValue;


    // Constructors

    /** default constructor */
    public ItemAttribute() {
    }

	/** minimal constructor */
    public ItemAttribute(String itemAttrId, Item item, ItemAttributeType itemAttrType) {
        this.itemAttrId = itemAttrId;
        this.item = item;
        this.itemAttrType = itemAttrType;
    }
    
    /** full constructor */
    public ItemAttribute(String itemAttrId, Item item, String itemAttrValue, ItemAttributeType itemAttrType) {
        this.itemAttrId = itemAttrId;
        this.item = item;
        this.itemAttrValue = itemAttrValue;
        this.itemAttrType = itemAttrType;
    }

   
    // Property accessors
    @Id     
    @GeneratedValue(generator="system-uuid")
	@GenericGenerator(name="system-uuid", strategy = "uuid")
    @Column(name="ITEM_ATTR_ID", unique=true, nullable=false, length=32)

    public String getItemAttrId() {
        return this.itemAttrId;
    }
    
    public void setItemAttrId(String itemAttrId) {
        this.itemAttrId = itemAttrId;
    }
    
	@ManyToOne(fetch=FetchType.EAGER)
        @JoinColumn(name="ITEM_ID", nullable=false)
    public Item getItem() {
        return this.item;
    }
    
    public void setItem(Item item) {
        this.item = item;
    }
    
    @Column(name="ITEM_ATTR_VALUE", length=256)

    public String getItemAttrValue() {
        return this.itemAttrValue;
    }
    
    public void setItemAttrValue(String itemAttrValue) {
        this.itemAttrValue = itemAttrValue;
    }
    
    
    @ManyToOne(fetch=FetchType.EAGER)
    @JoinColumn(name="ITEM_ATTR_TYPE_ID", nullable=false)
	public ItemAttributeType getItemAttrType() {
		return itemAttrType;
	}

	public void setItemAttrType(ItemAttributeType itemAttrType) {
		this.itemAttrType = itemAttrType;
	}

	@Transient
	public String getItemAttrDisplayValue() {
		return itemAttrDisplayValue;
	}

	public void setItemAttrDisplayValue(String itemAttrDisplayValue) {
		this.itemAttrDisplayValue = itemAttrDisplayValue;
	}
    
	
    /*@Column(name="ITEM_ATTR_TYPE_ID", nullable=false, length=32)

    public String getItemAttrTypeId() {
        return this.itemAttrTypeId;
    }
    
    public void setItemAttrTypeId(String itemAttrTypeId) {
        this.itemAttrTypeId = itemAttrTypeId;
    }*/
    
    
    
}