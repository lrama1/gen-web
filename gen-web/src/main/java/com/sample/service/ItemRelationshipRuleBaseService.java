package com.sample.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

//import the domain
import com.sample.web.domain.ItemRelationshipRuleBase;
import com.sample.common.ListWrapper;
import com.sample.dao.ItemRelationshipRuleBaseRepository;
import com.sample.common.SortedIndicator;

@Service
public class ItemRelationshipRuleBaseService {

	@Autowired
	ItemRelationshipRuleBaseRepository itemRelationshipRuleBaseRepository;

	public ListWrapper<ItemRelationshipRuleBase> getItemRelationshipRuleBases(int pageNumber, int pageSize,
			String sortByAttribute, String sortDirection) {
		//return itemRelationshipRuleBaseDAO.getItemRelationshipRuleBases(pageNumber, pageSize, sortByAttribute, sortDirection);

		PageRequest request = new PageRequest(pageNumber - 1, pageSize);
		Page<ItemRelationshipRuleBase> itemRelationshipRuleBasePage = itemRelationshipRuleBaseRepository
				.findAll(request);
		ListWrapper<ItemRelationshipRuleBase> results = new ListWrapper<>();
		results.setRows(itemRelationshipRuleBasePage.getContent());
		results.setTotalRecords(new Long(itemRelationshipRuleBasePage.getTotalElements()).intValue());
		results.setCurrentPage(pageNumber - 1);
		results.setSortedIndicator(new SortedIndicator(sortByAttribute, sortDirection));
		return results;

	}

	public ItemRelationshipRuleBase getItemRelationshipRuleBase(String id) {
		return itemRelationshipRuleBaseRepository.findOne(id);
	}

	public void saveNewItemRelationshipRuleBase(ItemRelationshipRuleBase itemRelationshipRuleBase) {
		itemRelationshipRuleBaseRepository.saveAndFlush(itemRelationshipRuleBase);
	}

	public void saveItemRelationshipRuleBase(ItemRelationshipRuleBase itemRelationshipRuleBase) {
		itemRelationshipRuleBaseRepository.saveAndFlush(itemRelationshipRuleBase);
	}
}
