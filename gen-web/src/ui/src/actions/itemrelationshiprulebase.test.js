
import {getRequest, putRequest} from "../utils/authority";
import {
    ITEMRELATIONSHIPRULEBASE_FETCH_SUCCESS,
    ITEMRELATIONSHIPRULEBASE_SAVE_SUCCESS,
    ITEMRELATIONSHIPRULEBASES_FETCH_SUCCESS,
    ITEMRELATIONSHIPRULEBASE_SAVE_ERROR,
    ITEMRELATIONSHIPRULEBASES_FETCH_ERROR,
    ITEMRELATIONSHIPRULEBASE_FETCH_ERROR,
    fetchAllItemRelationshipRuleBases,
    fetchItemRelationshipRuleBase,
    saveItemRelationshipRuleBase
} from "./itemrelationshiprulebase";

jest.mock('../utils/authority')

describe('itemRelationshipRuleBase (action)', () => {
    
    const mockDispatch = jest.fn();
    const mockGetState = jest.fn();

    jest.spyOn(window, 'alert').mockImplementation(() => {});
    
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('invokes success when list of itemRelationshipRuleBases are returned', async () => {
        /* obtain reference to thunk*/
        const thunk = fetchAllItemRelationshipRuleBases('/mockurl', 1);

        /**/
        const response = Promise.resolve({rows:[], totalRecords: 0, lastPage: 1})
        getRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(mockDispatch).toBeCalledWith({type: ITEMRELATIONSHIPRULEBASES_FETCH_SUCCESS, itemRelationshipRuleBases: [], totalRecords: 0, lastPage: 1, first: 1})
    })

    it('invokes error when an error occured in the service', async () => {
        /* obtain reference to thunk*/
        const thunk = fetchAllItemRelationshipRuleBases('/mockurl', 1);

        /**/
        const response = Promise.reject()
        getRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(mockDispatch).toBeCalledWith({type: ITEMRELATIONSHIPRULEBASES_FETCH_ERROR, error: true})
    })
    
    it('invokes success when a single itemRelationshipRuleBase is returned', async () => {
        /* obtain reference to thunk*/
        const thunk = fetchItemRelationshipRuleBase('/mockurl');

        /**/
        const mockObjectToReturn = {
                                                itemRelRuleBaseId: 'SampleitemRelRuleBaseId'
                                                                ,sourceItemTypeId: 'SamplesourceItemTypeId'    
                                                                ,targetItemTypeId: 'SampletargetItemTypeId'    
                                                                ,relTypeId: 'SamplerelTypeId'    
                                                                ,itemRelRuleBaseDesc: 'SampleitemRelRuleBaseDesc'    
                                                                ,repeatLowerBound: 'SamplerepeatLowerBound'    
                                                                ,repeatUpperBound: 'SamplerepeatUpperBound'    
                                            }
        
        const response = Promise.resolve(mockObjectToReturn)
        getRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(mockDispatch).toBeCalledWith({type: ITEMRELATIONSHIPRULEBASE_FETCH_SUCCESS, itemRelationshipRuleBase: mockObjectToReturn})
    })
    
    it('invokes error when a single itemRelationshipRuleBase fetch returned error', async () => {
        /* obtain reference to thunk*/
        const thunk = fetchItemRelationshipRuleBase('/mockurl');
        
        const response = Promise.reject()
        getRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(mockDispatch).toBeCalledWith({type: ITEMRELATIONSHIPRULEBASE_FETCH_ERROR, error: true})
    })

    it('invokes success when a record is saved', async () => {
        /* obtain reference to thunk*/
        const thunk = saveItemRelationshipRuleBase('/mockurl', {});

        /**/
        const mockObjectToReturn = {
                                                itemRelRuleBaseId: 'SampleitemRelRuleBaseId'
                                                                ,sourceItemTypeId: 'SamplesourceItemTypeId'    
                                                                ,targetItemTypeId: 'SampletargetItemTypeId'    
                                                                ,relTypeId: 'SamplerelTypeId'    
                                                                ,itemRelRuleBaseDesc: 'SampleitemRelRuleBaseDesc'    
                                                                ,repeatLowerBound: 'SamplerepeatLowerBound'    
                                                                ,repeatUpperBound: 'SamplerepeatUpperBound'    
                                            }
        const response = Promise.resolve(mockObjectToReturn)
        putRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(mockDispatch).toBeCalledWith({type: ITEMRELATIONSHIPRULEBASE_SAVE_SUCCESS, itemRelationshipRuleBase: mockObjectToReturn})
    })
    
    it('invokes error when save errors out', async () => {
        /* obtain reference to thunk*/
        const thunk = saveItemRelationshipRuleBase('/mockurl', {});

        const response = Promise.reject('Error saving')
        putRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(window.alert).toBeCalledWith("\"Error saving\"")
    })

})