import {connect} from 'react-redux';
import {editItemAttribute, saveItemAttribute} from '../actions/itemattribute';
import ItemAttributeEdit from '../components/ItemAttributeEdit';
import {fetchItem} from "../actions/item";

export const mapStateToProps = (state) => {
    console.log(state);
    return {
        selectedItemAttribute: state.itemAttribute
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        onEditItemAttribute(event){
            const {name, value} = event.target;
            dispatch(editItemAttribute([name], value))
        },
        async onSaveItemAttribute(url, itemAttribute){
            await dispatch(saveItemAttribute(url, itemAttribute))
            console.log(itemAttribute)
            dispatch(fetchItem('item/' + itemAttribute.item.itemId))
        }
    }
}
export default  connect(mapStateToProps, mapDispatchToProps)(ItemAttributeEdit);