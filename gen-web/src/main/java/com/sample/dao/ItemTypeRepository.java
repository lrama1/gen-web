package com.sample.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.sample.web.domain.ItemType;

@Repository
public interface ItemTypeRepository extends JpaRepository<ItemType, String> {
	
	/*@Query(value= "Select * from item_type \n-- #pageable\n",
			countQuery = "SELECT count(*) FROM item_type", 
			nativeQuery = true)
	Page<ItemType> findAllItemTypesNative(Pageable pageable);*/

}
