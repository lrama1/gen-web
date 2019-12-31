import {connect} from 'react-redux';
import {editItemAttributeType, saveItemAttributeType} from '../actions/itemattributetype';
import ItemAttributeTypeEdit from '../components/ItemAttributeTypeEdit';
import {fetchItemType} from "../actions/itemtype";

export const mapStateToProps = (state) => {
    console.log(state);
    return {
        selectedItemAttributeType: state.itemAttributeType,
        itemTypes: state.itemTypes
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        onEditItemAttributeType(event){
            const {name, value} = event.target;
            dispatch(editItemAttributeType([name], value))
        },
        async onSaveItemAttributeType(url, itemAttributeType){
            await dispatch(saveItemAttributeType(url, itemAttributeType));
            console.log('obtaining', itemAttributeType.itemTypeByItemTypeId.itemTypeId)
            dispatch(fetchItemType('itemtype/' + itemAttributeType.itemTypeByItemTypeId.itemTypeId))
        }
    }
}
export default  connect(mapStateToProps, mapDispatchToProps)(ItemAttributeTypeEdit);