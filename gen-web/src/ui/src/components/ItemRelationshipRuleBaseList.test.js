
import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import {clickElement} from '../utils/TestUtils';
import ItemRelationshipRuleBaseList from "../components/ItemRelationshipRuleBaseList";

describe("ItemRelationshipRuleBaseList", () => {
    const props = {
        history: []
    }

    const mockFetchItemRelationshipRuleBase = jest.fn();
    const mockFetchAllItemRelationshipRuleBases = jest.fn();
    const mockItemRelationshipRuleBases =
        [
                                                                                                                                                                                                                                                                                                                                                                                       
          {itemRelRuleBaseId: 'Sample-itemRelRuleBaseId0',sourceItemTypeId: 'Sample-sourceItemTypeId0',targetItemTypeId: 'Sample-targetItemTypeId0',relTypeId: 'Sample-relTypeId0',itemRelRuleBaseDesc: 'Sample-itemRelRuleBaseDesc0',repeatLowerBound: 'Sample-repeatLowerBound0',repeatUpperBound: 'Sample-repeatUpperBound0'}
                                ,
                                                                                                                                                                                                                                                                                                                                                                               
          {itemRelRuleBaseId: 'Sample-itemRelRuleBaseId1',sourceItemTypeId: 'Sample-sourceItemTypeId1',targetItemTypeId: 'Sample-targetItemTypeId1',relTypeId: 'Sample-relTypeId1',itemRelRuleBaseDesc: 'Sample-itemRelRuleBaseDesc1',repeatLowerBound: 'Sample-repeatLowerBound1',repeatUpperBound: 'Sample-repeatUpperBound1'}
                                ,
                                                                                                                                                                                                                                                                                                                                                                               
          {itemRelRuleBaseId: 'Sample-itemRelRuleBaseId2',sourceItemTypeId: 'Sample-sourceItemTypeId2',targetItemTypeId: 'Sample-targetItemTypeId2',relTypeId: 'Sample-relTypeId2',itemRelRuleBaseDesc: 'Sample-itemRelRuleBaseDesc2',repeatLowerBound: 'Sample-repeatLowerBound2',repeatUpperBound: 'Sample-repeatUpperBound2'}
                                ,
                                                                                                                                                                                                                                                                                                                                                                               
          {itemRelRuleBaseId: 'Sample-itemRelRuleBaseId3',sourceItemTypeId: 'Sample-sourceItemTypeId3',targetItemTypeId: 'Sample-targetItemTypeId3',relTypeId: 'Sample-relTypeId3',itemRelRuleBaseDesc: 'Sample-itemRelRuleBaseDesc3',repeatLowerBound: 'Sample-repeatLowerBound3',repeatUpperBound: 'Sample-repeatUpperBound3'}
                                ,
                                                                                                                                                                                                                                                                                                                                                                               
          {itemRelRuleBaseId: 'Sample-itemRelRuleBaseId4',sourceItemTypeId: 'Sample-sourceItemTypeId4',targetItemTypeId: 'Sample-targetItemTypeId4',relTypeId: 'Sample-relTypeId4',itemRelRuleBaseDesc: 'Sample-itemRelRuleBaseDesc4',repeatLowerBound: 'Sample-repeatLowerBound4',repeatUpperBound: 'Sample-repeatUpperBound4'}
                                ,
                                                                                                                                                                                                                                                                                                                                                                               
          {itemRelRuleBaseId: 'Sample-itemRelRuleBaseId5',sourceItemTypeId: 'Sample-sourceItemTypeId5',targetItemTypeId: 'Sample-targetItemTypeId5',relTypeId: 'Sample-relTypeId5',itemRelRuleBaseDesc: 'Sample-itemRelRuleBaseDesc5',repeatLowerBound: 'Sample-repeatLowerBound5',repeatUpperBound: 'Sample-repeatUpperBound5'}
                                ,
                                                                                                                                                                                                                                                                                                                                                                               
          {itemRelRuleBaseId: 'Sample-itemRelRuleBaseId6',sourceItemTypeId: 'Sample-sourceItemTypeId6',targetItemTypeId: 'Sample-targetItemTypeId6',relTypeId: 'Sample-relTypeId6',itemRelRuleBaseDesc: 'Sample-itemRelRuleBaseDesc6',repeatLowerBound: 'Sample-repeatLowerBound6',repeatUpperBound: 'Sample-repeatUpperBound6'}
                                ,
                                                                                                                                                                                                                                                                                                                                                                               
          {itemRelRuleBaseId: 'Sample-itemRelRuleBaseId7',sourceItemTypeId: 'Sample-sourceItemTypeId7',targetItemTypeId: 'Sample-targetItemTypeId7',relTypeId: 'Sample-relTypeId7',itemRelRuleBaseDesc: 'Sample-itemRelRuleBaseDesc7',repeatLowerBound: 'Sample-repeatLowerBound7',repeatUpperBound: 'Sample-repeatUpperBound7'}
                                ,
                                                                                                                                                                                                                                                                                                                                                                               
          {itemRelRuleBaseId: 'Sample-itemRelRuleBaseId8',sourceItemTypeId: 'Sample-sourceItemTypeId8',targetItemTypeId: 'Sample-targetItemTypeId8',relTypeId: 'Sample-relTypeId8',itemRelRuleBaseDesc: 'Sample-itemRelRuleBaseDesc8',repeatLowerBound: 'Sample-repeatLowerBound8',repeatUpperBound: 'Sample-repeatUpperBound8'}
                                ,
                                                                                                                                                                                                                                                                                                                                                                               
          {itemRelRuleBaseId: 'Sample-itemRelRuleBaseId9',sourceItemTypeId: 'Sample-sourceItemTypeId9',targetItemTypeId: 'Sample-targetItemTypeId9',relTypeId: 'Sample-relTypeId9',itemRelRuleBaseDesc: 'Sample-itemRelRuleBaseDesc9',repeatLowerBound: 'Sample-repeatLowerBound9',repeatUpperBound: 'Sample-repeatUpperBound9'}
                                ,
                                                                                                                                                                                                                                                                                                                                                                               
          {itemRelRuleBaseId: 'Sample-itemRelRuleBaseId10',sourceItemTypeId: 'Sample-sourceItemTypeId10',targetItemTypeId: 'Sample-targetItemTypeId10',relTypeId: 'Sample-relTypeId10',itemRelRuleBaseDesc: 'Sample-itemRelRuleBaseDesc10',repeatLowerBound: 'Sample-repeatLowerBound10',repeatUpperBound: 'Sample-repeatUpperBound10'}
                                ,
                                                                                                                                                                                                                                                                                                                                                                               
          {itemRelRuleBaseId: 'Sample-itemRelRuleBaseId11',sourceItemTypeId: 'Sample-sourceItemTypeId11',targetItemTypeId: 'Sample-targetItemTypeId11',relTypeId: 'Sample-relTypeId11',itemRelRuleBaseDesc: 'Sample-itemRelRuleBaseDesc11',repeatLowerBound: 'Sample-repeatLowerBound11',repeatUpperBound: 'Sample-repeatUpperBound11'}
                                ,
                                                                                                                                                                                                                                                                                                                                                                               
          {itemRelRuleBaseId: 'Sample-itemRelRuleBaseId12',sourceItemTypeId: 'Sample-sourceItemTypeId12',targetItemTypeId: 'Sample-targetItemTypeId12',relTypeId: 'Sample-relTypeId12',itemRelRuleBaseDesc: 'Sample-itemRelRuleBaseDesc12',repeatLowerBound: 'Sample-repeatLowerBound12',repeatUpperBound: 'Sample-repeatUpperBound12'}
                                ,
                                                                                                                                                                                                                                                                                                                                                                               
          {itemRelRuleBaseId: 'Sample-itemRelRuleBaseId13',sourceItemTypeId: 'Sample-sourceItemTypeId13',targetItemTypeId: 'Sample-targetItemTypeId13',relTypeId: 'Sample-relTypeId13',itemRelRuleBaseDesc: 'Sample-itemRelRuleBaseDesc13',repeatLowerBound: 'Sample-repeatLowerBound13',repeatUpperBound: 'Sample-repeatUpperBound13'}
                ]

        const componentToTest = <ItemRelationshipRuleBaseList history={props.history} fetchItemRelationshipRuleBase={mockFetchItemRelationshipRuleBase}
            fetchAllItemRelationshipRuleBases={mockFetchAllItemRelationshipRuleBases} itemRelationshipRuleBases={mockItemRelationshipRuleBases} first={0} totalRecords={11} />

        const rootDiv = document.createElement('div') ;
        ReactDom.render(componentToTest, rootDiv);
        document.body.appendChild(rootDiv);
        
        it('renders correctly', () => {
            const tree = renderer.create(componentToTest).toJSON();
            expect(tree).toMatchSnapshot();
        })
        
        it('displays the correct number of rows', () => {
            const numberOfRowsRendered = document.querySelectorAll('div.p-datatable-wrapper > table > tbody > tr').length;
            expect(numberOfRowsRendered).toBe(10)
        })

        it('invokes row action', () =>{
            clickElement(document.querySelector("button[id='Sample-itemRelRuleBaseId0']"))
            expect(mockFetchItemRelationshipRuleBase).toBeCalledTimes(1)
        })
        
        it('invokes next page', () => {
            const selector = "div.p-paginator.p-component.p-unselectable-text.p-paginator-bottom > span > button:nth-child(2)";
            clickElement(document.querySelector(selector));
            expect(mockFetchAllItemRelationshipRuleBases).toBeCalledTimes(1);
        })
})