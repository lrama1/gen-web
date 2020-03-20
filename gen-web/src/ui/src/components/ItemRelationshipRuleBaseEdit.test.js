import React from 'react';
import renderer from 'react-test-renderer';
import ItemRelationshipRuleBaseEdit from './ItemRelationshipRuleBaseEdit';
import ReactDom from 'react-dom';
import {changeInputValue, clickElement} from '../utils/TestUtils'

describe("ItemRelationshipRuleBaseEdit", ()=> {
    const mockChangeHandler = jest.fn();
    const mockSaveHandler = jest.fn();

    const mockSelectedItemRelationshipRuleBase = {
                        itemRelRuleBaseId: 'SampleitemRelRuleBaseId'
                                ,sourceItemTypeId: 'SamplesourceItemTypeId'    
                                ,targetItemTypeId: 'SampletargetItemTypeId'    
                                ,relTypeId: 'SamplerelTypeId'    
                                ,itemRelRuleBaseDesc: 'SampleitemRelRuleBaseDesc'    
                                ,repeatLowerBound: 'SamplerepeatLowerBound'    
                                ,repeatUpperBound: 'SamplerepeatUpperBound'    
                    }

    const componentToTest = <ItemRelationshipRuleBaseEdit selectedItemRelationshipRuleBase={mockSelectedItemRelationshipRuleBase} onEditItemRelationshipRuleBase={mockChangeHandler}
                        onSaveItemRelationshipRuleBase={mockSaveHandler}/>
    const rootDiv = document.createElement('div')
    ReactDom.render(componentToTest, rootDiv);
    document.body.appendChild(rootDiv);
    
    it('Renders fields correctly', () =>{
        const props = {
            selectedItemRelationshipRuleBase : {
                                                itemRelRuleBaseId: 'SampleitemRelRuleBaseId'
                                                                ,sourceItemTypeId: 'SamplesourceItemTypeId'    
                                                                ,targetItemTypeId: 'SampletargetItemTypeId'    
                                                                ,relTypeId: 'SamplerelTypeId'    
                                                                ,itemRelRuleBaseDesc: 'SampleitemRelRuleBaseDesc'    
                                                                ,repeatLowerBound: 'SamplerepeatLowerBound'    
                                                                ,repeatUpperBound: 'SamplerepeatUpperBound'    
                                            }
        }
        const tree = renderer.create(<ItemRelationshipRuleBaseEdit {...props}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
        
    it('dispatches input changes', ()=> {
        changeInputValue(document.querySelector("input[name='itemRelRuleBaseId'"), "TEST");
        expect(mockChangeHandler).toBeCalledTimes(1);
    })
    
    it('calls save function on click of Save button', () => {
        clickElement(document.querySelector("button[id='saveButton']"));
        expect(mockSaveHandler).toBeCalledTimes(1);
        expect(mockSaveHandler).toHaveBeenCalledWith('itemrelationshiprulebase/SampleitemRelRuleBaseId', mockSelectedItemRelationshipRuleBase)
    })

})