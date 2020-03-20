
import {ITEMRELATIONSHIPRULEBASE_FETCH_SUCCESS , ITEMRELATIONSHIPRULEBASE_EDIT, ITEMRELATIONSHIPRULEBASE_SAVE_SUCCESS, ITEMRELATIONSHIPRULEBASE_SAVE_ERROR} from '../actions/itemrelationshiprulebase'

const initialItemRelationshipRuleBases = {
     records: [],
     totalRecords: 0,
     first: 0        
} 

export const itemRelationshipRuleBases = (state = initialItemRelationshipRuleBases, action) => {
    if(action.type === 'ITEMRELATIONSHIPRULEBASES_FETCH_SUCCESS'){
        return {
            ...state,
            records: action.itemRelationshipRuleBases,
            totalRecords: action.totalRecords,
            first: action.first
        }
    }
    return state;
}

const initialItemRelationshipRuleBase = {
        itemRelRuleBaseId: ''    
            ,sourceItemType: {}
            ,targetItemType: {}
            ,relationshipType: {}
            ,itemRelRuleBaseDesc: ''    
            ,repeatLowerBound: ''    
            ,repeatUpperBound: ''    
    }

export const itemRelationshipRuleBase = (state = initialItemRelationshipRuleBase, action) => {
    if (action.type === ITEMRELATIONSHIPRULEBASE_FETCH_SUCCESS){
        return action.itemRelationshipRuleBase
        
    }else if(action.type === ITEMRELATIONSHIPRULEBASE_EDIT){
        let newState = {}
        console.log(action.name[0])
        if(action.name[0].indexOf('.') == -1) {
            newState = {
                ...state,
                [action.name]: action.value
            }
        }else{
            const names = action.name[0].split(".")
            newState = {
                ...state
            }
            newState[names[0]][names[1]] = action.value;
        }
        return newState;
    }else if(action.type === ITEMRELATIONSHIPRULEBASE_SAVE_SUCCESS){
        return action.itemRelationshipRuleBase;
    }else if(action.type === ITEMRELATIONSHIPRULEBASE_SAVE_ERROR){
        alert(action.error)
        return state;
    }
    return state;
}
