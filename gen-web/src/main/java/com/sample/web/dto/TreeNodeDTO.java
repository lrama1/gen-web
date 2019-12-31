package com.sample.web.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class TreeNodeDTO implements Serializable{
	private static final long serialVersionUID = 1L;
	private String name;
	private String parent;
	private List<TreeNodeDTO> children = new ArrayList<>();
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getParent() {
		return parent;
	}
	public void setParent(String parent) {
		this.parent = parent;
	}
	public List<TreeNodeDTO> getChildren() {
		return children;
	}
	public void setChildren(List<TreeNodeDTO> children) {
		this.children = children;
	}
	
	

}
