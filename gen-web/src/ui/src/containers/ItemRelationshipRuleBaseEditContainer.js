import {connect} from 'react-redux';
import {editItemRelationshipRuleBase, saveItemRelationshipRuleBase} from '../actions/itemrelationshiprulebase';
import ItemRelationshipRuleBaseEdit from '../components/ItemRelationshipRuleBaseEdit';

export const mapStateToProps = (state) => {
    console.log(state);
    return {
        selectedItemRelationshipRuleBase: state.itemRelationshipRuleBase,
        itemTypes: state.itemTypes,
        relationshipTypes: state.relationshipTypes
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        onEditItemRelationshipRuleBase(event){
            const {name, value} = event.target;
            dispatch(editItemRelationshipRuleBase([name], value))
        },
        onSaveItemRelationshipRuleBase(url, itemRelationshipRuleBase){
            dispatch(saveItemRelationshipRuleBase(url, itemRelationshipRuleBase))
        }
    }
}
export default  connect(mapStateToProps, mapDispatchToProps)(ItemRelationshipRuleBaseEdit);