package com.sample.service;

import java.util.LinkedHashSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

//import the domain
import com.sample.web.domain.Item;
import com.sample.web.domain.ItemAttribute;
import com.sample.web.domain.RelationshipMapping;
import com.sample.web.dto.TreeNodeDTO;
import com.sample.common.ListWrapper;
import com.sample.dao.ItemRepository;
import com.sample.common.SortedIndicator;

@Service
public class ItemService {

	@Autowired
	ItemRepository itemRepository;

	public ListWrapper<Item> getItems(int pageNumber, int pageSize, String sortByAttribute, String sortDirection) {
		// return itemDAO.getItems(pageNumber, pageSize, sortByAttribute,
		// sortDirection);

		PageRequest request = new PageRequest(pageNumber - 1, pageSize);
		Page<Item> itemPage = itemRepository.findAll(request);
		// remove relationship mappings so it does not interfere with Jackson
		for (Item item : itemPage.getContent()) {
			item.setRelationshipMappingsForSourceItemId(new LinkedHashSet<>());
		}

		ListWrapper<Item> results = new ListWrapper<>();
		results.setRows(itemPage.getContent());
		results.setTotalRecords(new Long(itemPage.getTotalElements()).intValue());
		results.setCurrentPage(pageNumber - 1);
		results.setSortedIndicator(new SortedIndicator(sortByAttribute, sortDirection));
		return results;
	}

	public ListWrapper<Item> getItemsByType(String itemTypeId, int pageNumber, int pageSize, String sortByAttribute,
			String sortDirection) {
		// return itemDAO.getItems(pageNumber, pageSize, sortByAttribute,
		// sortDirection);

		PageRequest request = new PageRequest(pageNumber - 1, pageSize);
		Page<Item> itemPage = itemRepository.findByItemType(itemTypeId, request);
		// remove relationship mappings so it does not interfere with Jackson
		for (Item item : itemPage.getContent()) {
			item.setRelationshipMappingsForSourceItemId(new LinkedHashSet<>());
		}

		ListWrapper<Item> results = new ListWrapper<>();
		results.setRows(itemPage.getContent());
		results.setTotalRecords(new Long(itemPage.getTotalElements()).intValue());
		results.setCurrentPage(pageNumber - 1);
		results.setSortedIndicator(new SortedIndicator(sortByAttribute, sortDirection));
		return results;
	}

	public Item getItem(String id) {
		Item item = itemRepository.findOne(id);
		if (item != null) {
			for (ItemAttribute attribute : item.getItemAttributes()) {
				if (attribute.getItemAttrType().getItemTypeIdForLookup() != null) {
					System.out.println("Must retrieve from list**********************"
							+ attribute.getItemAttrType().getItemAttrTypeName());
					attribute.setItemAttrDisplayValue(
							itemRepository.findOne(attribute.getItemAttrValue()).getItemName());
				}
			}
		}
		return item;
	}
	
	public TreeNodeDTO getTree(String itemId) {
		Item item = itemRepository.findOne(itemId);
		TreeNodeDTO root = new TreeNodeDTO();
		if(item != null) {
			root.setName(item.getItemName());
			generateTree(root, item);
		}
		return root;
	}
	
	private void generateTree(TreeNodeDTO parentNode, Item parentItem) {
		if(parentItem != null) {
			parentNode.setName(parentItem.getItemName());
			for(RelationshipMapping mapping: parentItem.getRelationshipMappingsForSourceItemId()) {
				Item item = mapping.getItemByTargetItemId();
				TreeNodeDTO childNode = new TreeNodeDTO();
				childNode.setName(item.getItemName());
				parentNode.getChildren().add(childNode);
				generateTree(childNode, item);
			}
		}
	}

	public Item saveNewItem(Item item) {
		return itemRepository.saveAndFlush(item);
	}

	public Item saveItem(Item item) {
		return itemRepository.saveAndFlush(item);
	}
}
