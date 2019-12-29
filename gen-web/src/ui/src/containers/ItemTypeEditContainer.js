import {connect} from 'react-redux';
import {editItemType, fetchAllItemTypes, saveItemType} from '../actions/itemtype';
import ItemTypeEdit from '../components/ItemTypeEdit';
import {fetchItemAttributeType} from "../actions/itemattributetype";

export const mapStateToProps = (state) => {
    console.log(state);
    return {
        selectedItemType: state.itemType
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        onEditItemType(event){
            const {name, value} = event.target;
            dispatch(editItemType([name], value))
        },
        async onSaveItemType(url, itemType){
            await dispatch(saveItemType(url, itemType));
            dispatch(fetchAllItemTypes('itemtypes'))
        },
        addNewItemAttributeType(parentItemTypeId, itemAttrTypeId){
            dispatch(fetchItemAttributeType('itemattributetype/' + itemAttrTypeId, parentItemTypeId))
        }
    }
}
export default  connect(mapStateToProps, mapDispatchToProps)(ItemTypeEdit);