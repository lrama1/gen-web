package com.sample.controller;

import org.springframework.beans.factory.annotation.Autowired;
import java.security.Principal;
import javax.annotation.Resource;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import javax.validation.Valid;

//import the domain
import com.sample.web.domain.ItemRelationshipRuleBase;
import com.sample.web.domain.ItemType;
import com.sample.web.domain.RelationshipType;
import com.sample.service.ItemRelationshipRuleBaseService;
import com.sample.common.ListWrapper;
import com.sample.common.NameValuePair;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.context.MessageSource;

import java.util.List;
import java.util.ArrayList;

@RestController
public class ItemRelationshipRuleBaseController extends BaseController {

	@Autowired
	ItemRelationshipRuleBaseService itemRelationshipRuleBaseService;

	@Resource(name = "messageSource")
	private MessageSource messageSource;

	//@PreAuthorize("@sampleUserDetailsService.isAuthorizedToAccessData(#id)")	
	@RequestMapping(value = "/itemrelationshiprulebase/{id}", method = RequestMethod.GET)
	public ItemRelationshipRuleBase getItemRelationshipRuleBase(@PathVariable("id") String id, Principal principal) {
		Authentication authenticationToken = (Authentication) principal;
		ItemRelationshipRuleBase itemRelationshipRuleBase = itemRelationshipRuleBaseService
				.getItemRelationshipRuleBase(id);
		if (itemRelationshipRuleBase == null) {
			ItemRelationshipRuleBase ruleBase =  new ItemRelationshipRuleBase();
			ruleBase.setItemRelRuleBaseId("");
			ruleBase.setSourceItemType(new ItemType());
			ruleBase.setTargetItemType(new ItemType());
			ruleBase.setItemRelRuleBaseDesc("");
			ruleBase.setRelationshipType(new RelationshipType());
			ruleBase.setRepeatLowerBound("");
			ruleBase.setRepeatUpperBound("");
			return ruleBase;
		
		}else
			return itemRelationshipRuleBase;
	}

	@RequestMapping(value = "/itemrelationshiprulebase", headers = {
			"accept=application/json" }, method = RequestMethod.POST)
	public ItemRelationshipRuleBase saveNewItemRelationshipRuleBase(
			@Valid @RequestBody ItemRelationshipRuleBase itemRelationshipRuleBase) {
		itemRelationshipRuleBaseService.saveNewItemRelationshipRuleBase(itemRelationshipRuleBase);
		return itemRelationshipRuleBase;
	}

	@RequestMapping(value = "/itemrelationshiprulebase/{id}", headers = {
			"accept=application/json" }, method = RequestMethod.PUT)
	public ItemRelationshipRuleBase updateItemRelationshipRuleBase(
			@Valid @RequestBody ItemRelationshipRuleBase itemRelationshipRuleBase) {
		itemRelationshipRuleBaseService.saveItemRelationshipRuleBase(itemRelationshipRuleBase);
		return itemRelationshipRuleBase;
	}

	@RequestMapping("/itemrelationshiprulebases")
	public ListWrapper<ItemRelationshipRuleBase> getAllItemRelationshipRuleBases(@RequestParam("page") int pageNumber,
			@RequestParam("per_page") int pageSize,
			@RequestParam(value = "sort_by", required = false) String sortByAttributeName,
			@RequestParam(value = "order", required = false) String sortDirection) {
		return itemRelationshipRuleBaseService.getItemRelationshipRuleBases(pageNumber, pageSize, sortByAttributeName,
				sortDirection);

	}

	//=============
}
