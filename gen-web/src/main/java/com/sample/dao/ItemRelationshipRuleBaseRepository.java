package com.sample.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sample.web.domain.ItemRelationshipRuleBase;

@Repository
public interface ItemRelationshipRuleBaseRepository extends JpaRepository<ItemRelationshipRuleBase, String> {

}
