/*
Refactor opportunities
1.  create separate files for each logical group of action creators
2.  combine the separate action creator files here an export them
 */
import {getRequest, postRequest, putRequest} from "../utils/authority";

export const ITEMRELATIONSHIPRULEBASE_FETCH_SUCCESS = 'ITEMRELATIONSHIPRULEBASE_FETCH_SUCCESS';
export function itemRelationshipRuleBaseFetchSuccess(itemRelationshipRuleBase){
    console.log('DISPATCHING SUCCESS', itemRelationshipRuleBase );
    return {
        type: ITEMRELATIONSHIPRULEBASE_FETCH_SUCCESS,
        itemRelationshipRuleBase: itemRelationshipRuleBase
    }
}

export const ITEMRELATIONSHIPRULEBASE_FETCH_ERROR = 'ITEMRELATIONSHIPRULEBASE_FETCH_ERROR';
export function itemRelationshipRuleBaseFetchError(error){
    return {
        type: ITEMRELATIONSHIPRULEBASE_FETCH_ERROR,
        error: error
    }
}

export function fetchItemRelationshipRuleBase(url){
    console.log('Fetch of single itemRelationshipRuleBase Invoked');
    return async dispatch => {
        try{
            const data = await getRequest(url);
            dispatch(itemRelationshipRuleBaseFetchSuccess(data))
        }catch (e) {
            dispatch(itemRelationshipRuleBaseFetchError(true))
        }   
    }
}

export const ITEMRELATIONSHIPRULEBASE_EDIT = 'ITEMRELATIONSHIPRULEBASE_EDIT';
export function editItemRelationshipRuleBase(name, value){    
    return {
        type: ITEMRELATIONSHIPRULEBASE_EDIT,
        name,
        value
    }
}

export const ITEMRELATIONSHIPRULEBASE_SAVE_SUCCESS = 'ITEMRELATIONSHIPRULEBASE_SAVE_SUCCESS';
export function saveItemRelationshipRuleBaseSuccess(itemRelationshipRuleBase){
    return {
        type: ITEMRELATIONSHIPRULEBASE_SAVE_SUCCESS,
        itemRelationshipRuleBase: itemRelationshipRuleBase
    }
}

export const ITEMRELATIONSHIPRULEBASE_SAVE_ERROR = 'ITEMRELATIONSHIPRULEBASE_SAVE_ERROR';
export function saveItemRelationshipRuleBaseError(error){
    return {
        type: ITEMRELATIONSHIPRULEBASE_SAVE_ERROR,
        error
    }
}

export function saveItemRelationshipRuleBase(url, itemRelationshipRuleBase){
    return async dispatch => {
        try {
            let data = null;
            if(itemRelationshipRuleBase.itemRelRuleBaseId)
                data = await putRequest(url, itemRelationshipRuleBase)
            else
                data = await postRequest(url, itemRelationshipRuleBase)
            dispatch(saveItemRelationshipRuleBaseSuccess(data))
        }catch (e){
            alert(JSON.stringify(e))
        }
    }
}

/*---------------------------------------------------------*/

export const ITEMRELATIONSHIPRULEBASES_FETCH_SUCCESS = 'ITEMRELATIONSHIPRULEBASES_FETCH_SUCCESS';
export function itemRelationshipRuleBasesFetchSuccess(itemRelationshipRuleBases, totalRecords, lastPage, first){
    console.log('DISPATCHING SUCCESS', itemRelationshipRuleBases );
    return {
        type: ITEMRELATIONSHIPRULEBASES_FETCH_SUCCESS,
        itemRelationshipRuleBases: itemRelationshipRuleBases,
        totalRecords,
        lastPage,
        first
    }
}

export const ITEMRELATIONSHIPRULEBASES_FETCH_ERROR = 'ITEMRELATIONSHIPRULEBASES_FETCH_ERROR';
export function itemRelationshipRuleBasesFetchError(error){
    return {
        type: ITEMRELATIONSHIPRULEBASES_FETCH_ERROR,
        error: error
    }
}

export function fetchAllItemRelationshipRuleBases(url, first){
    console.log('Fetch Invoked');
    return async dispatch => {
        try {
            const data = await getRequest(url);
            dispatch(itemRelationshipRuleBasesFetchSuccess(data.rows, data.totalRecords, data.lastPage, first))
        }catch (e) {
            dispatch(itemRelationshipRuleBasesFetchError(true))
        }
    }
}