import {itemRelationshipRuleBases, itemRelationshipRuleBase} from "./itemrelationshiprulebase";

describe('reducers/itemRelationshipRuleBase', ()=> {

    jest.spyOn(window, 'alert').mockImplementation(() => {});

    afterEach(() => {
        jest.clearAllMocks();
    });

    /* We are testing that when we give our reducer an action, it creates
    * an expected new state*/
    it('returns a state with itemRelationshipRuleBases', () => {
        const dummyAction = {
            type: 'ITEMRELATIONSHIPRULEBASES_FETCH_SUCCESS',
            itemRelationshipRuleBases: [

            ],
            totalRecords: 2,
            first: 1
        }

        const expectedResults = {
            records: [],
            totalRecords: 2,
            first: 1
        }

        const result = itemRelationshipRuleBases(null, dummyAction);
        expect(result).toEqual(expectedResults)
    })

    it('returns a state with itemRelationshipRuleBase', () => {
        const dummyAction = {
            type: 'ITEMRELATIONSHIPRULEBASE_FETCH_SUCCESS',
            itemRelationshipRuleBase: {
                                                itemRelRuleBaseId: 'SampleitemRelRuleBaseId'
                                                                ,sourceItemTypeId: 'SamplesourceItemTypeId'    
                                                                ,targetItemTypeId: 'SampletargetItemTypeId'    
                                                                ,relTypeId: 'SamplerelTypeId'    
                                                                ,itemRelRuleBaseDesc: 'SampleitemRelRuleBaseDesc'    
                                                                ,repeatLowerBound: 'SamplerepeatLowerBound'    
                                                                ,repeatUpperBound: 'SamplerepeatUpperBound'    
                                            }
        }

        const expectedResults = {
                                                itemRelRuleBaseId: 'SampleitemRelRuleBaseId'
                                                                ,sourceItemTypeId: 'SamplesourceItemTypeId'    
                                                                ,targetItemTypeId: 'SampletargetItemTypeId'    
                                                                ,relTypeId: 'SamplerelTypeId'    
                                                                ,itemRelRuleBaseDesc: 'SampleitemRelRuleBaseDesc'    
                                                                ,repeatLowerBound: 'SamplerepeatLowerBound'    
                                                                ,repeatUpperBound: 'SamplerepeatUpperBound'    
                                        }

        const result = itemRelationshipRuleBase(null, dummyAction);
        expect(result).toEqual(result)
    })

    it('returns a state a field edited', () => {
        const dummyAction = {
            type: 'ITEMRELATIONSHIPRULEBASE_EDIT',
            "itemRelRuleBaseId": 'ZZZ'
        }

        const expectedResults = {
            "itemRelRuleBaseId": "ZZZ",
            attr2: 'YYY'
        }

        const result = itemRelationshipRuleBase({attr2: 'YYY'}, dummyAction);
        expect(result).toEqual(result)
    })

    it('returns saved itemRelationshipRuleBase', () => {
        const dummyAction = {
            type: 'ITEMRELATIONSHIPRULEBASE_SAVE_SUCCESS',
            "itemRelationshipRuleBase": {
                                                itemRelRuleBaseId: 'SampleitemRelRuleBaseId'
                                                                ,sourceItemTypeId: 'SamplesourceItemTypeId'    
                                                                ,targetItemTypeId: 'SampletargetItemTypeId'    
                                                                ,relTypeId: 'SamplerelTypeId'    
                                                                ,itemRelRuleBaseDesc: 'SampleitemRelRuleBaseDesc'    
                                                                ,repeatLowerBound: 'SamplerepeatLowerBound'    
                                                                ,repeatUpperBound: 'SamplerepeatUpperBound'    
                                            }
        }

        const expectedResult = {
                                                itemRelRuleBaseId: 'SampleitemRelRuleBaseId'
                                                                ,sourceItemTypeId: 'SamplesourceItemTypeId'    
                                                                ,targetItemTypeId: 'SampletargetItemTypeId'    
                                                                ,relTypeId: 'SamplerelTypeId'    
                                                                ,itemRelRuleBaseDesc: 'SampleitemRelRuleBaseDesc'    
                                                                ,repeatLowerBound: 'SamplerepeatLowerBound'    
                                                                ,repeatUpperBound: 'SamplerepeatUpperBound'    
                                        }

        const result = itemRelationshipRuleBase(null, dummyAction);

        expect(result).toEqual(expectedResult)
    })

    it('pops up alert on error', () => {
        const dummyAction = {
            type: 'ITEMRELATIONSHIPRULEBASE_SAVE_ERROR',
            error: 'Error saving'
        }

        const result = itemRelationshipRuleBase(null, dummyAction);
        expect(window.alert).toBeCalledWith('Error saving')
    })
})