package com.sample.web.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import org.hibernate.annotations.GenericGenerator;


/**
 * ItemRelationshipRuleBase entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name="ITEM_RELATIONSHIP_RULE_BASE"
    ,schema="PUBLIC"
    ,catalog="PUBLIC"
, uniqueConstraints = @UniqueConstraint(columnNames={"SOURCE_ITEM_TYPE_ID", "TARGET_ITEM_TYPE_ID", "REL_TYPE_ID"})
)

public class ItemRelationshipRuleBase  implements java.io.Serializable {


    // Fields    

     private String itemRelRuleBaseId;
     private ItemType sourceItemType;
     private ItemType targetItemType;
     private RelationshipType relationshipType;
     private String itemRelRuleBaseDesc;
     private String repeatLowerBound;
     private String repeatUpperBound;


    // Constructors

    /** default constructor */
    public ItemRelationshipRuleBase() {
    }

    
    /** full constructor */
    public ItemRelationshipRuleBase(String itemRelRuleBaseId, ItemType sourceItemType, ItemType targetItemType, RelationshipType relationshipType, String itemRelRuleBaseDesc) {
        this.itemRelRuleBaseId = itemRelRuleBaseId;
        this.sourceItemType = sourceItemType;
        this.targetItemType = targetItemType;
        this.relationshipType = relationshipType;
        this.itemRelRuleBaseDesc = itemRelRuleBaseDesc;
    }

   
    // Property accessors
    @Id 
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy="uuid")
    @Column(name="ITEM_REL_RULE_BASE_ID", unique=true, nullable=false, length=32)
    public String getItemRelRuleBaseId() {
        return this.itemRelRuleBaseId;
    }
    
    public void setItemRelRuleBaseId(String itemRelRuleBaseId) {
        this.itemRelRuleBaseId = itemRelRuleBaseId;
    }
	@ManyToOne(fetch=FetchType.EAGER)
        @JoinColumn(name="SOURCE_ITEM_TYPE_ID", nullable=false)
    public ItemType getSourceItemType() {
        return this.sourceItemType;
    }
    
    public void setSourceItemType(ItemType itemTypeBySourceItemTypeId) {
        this.sourceItemType = itemTypeBySourceItemTypeId;
    }
    
	@ManyToOne(fetch=FetchType.EAGER)
        @JoinColumn(name="TARGET_ITEM_TYPE_ID", nullable=false)
    public ItemType getTargetItemType() {
        return this.targetItemType;
    }
    
    public void setTargetItemType(ItemType itemTypeByTargetItemTypeId) {
        this.targetItemType = itemTypeByTargetItemTypeId;
    }
    
	@ManyToOne(fetch=FetchType.EAGER)
        @JoinColumn(name="REL_TYPE_ID", nullable=false)
    public RelationshipType getRelationshipType() {
        return this.relationshipType;
    }
    
    public void setRelationshipType(RelationshipType relationshipType) {
        this.relationshipType = relationshipType;
    }
    
    @Column(name="ITEM_REL_RULE_BASE_DESC", nullable=false, length=256)
    public String getItemRelRuleBaseDesc() {
        return this.itemRelRuleBaseDesc;
    }
    
    public void setItemRelRuleBaseDesc(String itemRelRuleBaseDesc) {
        this.itemRelRuleBaseDesc = itemRelRuleBaseDesc;
    }

    @Column(name="REPEAT_LOWER_BOUND", nullable=false, length=10)
	public String getRepeatLowerBound() {
		return repeatLowerBound;
	}


	public void setRepeatLowerBound(String repeatLowerBound) {
		this.repeatLowerBound = repeatLowerBound;
	}

	@Column(name="REPEAT_UPPER_BOUND", nullable=false, length=10)
	public String getRepeatUpperBound() {
		return repeatUpperBound;
	}


	public void setRepeatUpperBound(String repeatUpperBound) {
		this.repeatUpperBound = repeatUpperBound;
	}

}