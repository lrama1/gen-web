
import React from 'react';
jest.mock('../actions/itemrelationshiprulebase')
import {fetchItemRelationshipRuleBase, fetchAllItemRelationshipRuleBases} from '../actions/itemrelationshiprulebase';
import {mapStateToProps, mapDispatchToProps} from "./ItemRelationshipRuleBaseListContainer";

describe('ItemRelationshipRuleBaseListContainer', () => {
    const mockDispatch = jest.fn();
    
    afterEach(() => {
        mockDispatch.mockClear();
    });
    
    it('returns the expected state', ()=> {
        const sampleState = {
            itemRelationshipRuleBases: {
                records: [],
                totalRecords: 0,
                first: 1
            }
        }
        const result = mapStateToProps(sampleState);
        expect(result).toMatchSnapshot();
    })
    
    it('dispatches fetchItemRelationshipRuleBase', () => {
        fetchItemRelationshipRuleBase.mockImplementation(()=> {
            return {param: 'SomeValue'}
        });
        
        mapDispatchToProps(mockDispatch).fetchItemRelationshipRuleBase('mockurl', 1)
        expect(mockDispatch).toBeCalledWith({param:'SomeValue'})
    })
    
    it('dispatches fetchAllItemRelationshipRuleBases', () => {
        fetchAllItemRelationshipRuleBases.mockImplementation(()=> {
            return {param: 'SomeValue'}
        });
        
        mapDispatchToProps(mockDispatch).fetchAllItemRelationshipRuleBases('mockurl', 1)
        expect(mockDispatch).toBeCalledWith({param:'SomeValue'})
    })
    
});