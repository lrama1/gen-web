
import {connect} from 'react-redux';
import ItemRelationshipRuleBaseList from '../components/ItemRelationshipRuleBaseList'
import {fetchItemRelationshipRuleBase, fetchAllItemRelationshipRuleBases} from '../actions/itemrelationshiprulebase';


export const mapStateToProps = (state) => {
    console.log(state);
    return {
        itemRelationshipRuleBases: state.itemRelationshipRuleBases.records,
        totalRecords: state.itemRelationshipRuleBases.totalRecords,
        first: state.itemRelationshipRuleBases.first
    };
};

export const mapDispatchToProps = (dispatch) => {
    return{
        fetchItemRelationshipRuleBase(url){
            dispatch(fetchItemRelationshipRuleBase(url))
        },
        fetchAllItemRelationshipRuleBases(url, first){
            dispatch(fetchAllItemRelationshipRuleBases(url, first))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemRelationshipRuleBaseList);