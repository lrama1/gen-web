import {connect} from 'react-redux';
import {editRelationshipType, fetchAllRelationshipTypes, saveRelationshipType} from '../actions/relationshiptype';
import RelationshipTypeEdit from '../components/RelationshipTypeEdit';

export const mapStateToProps = (state) => {
    console.log(state);
    return {
        selectedRelationshipType: state.relationshipType
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        onEditRelationshipType(event){
            const {name, value} = event.target;
            dispatch(editRelationshipType([name], value))
        },
        async onSaveRelationshipType(url, relationshipType){
            await dispatch(saveRelationshipType(url, relationshipType))
            dispatch(fetchAllRelationshipTypes('relationshiptypes'))
        }
    }
}
export default  connect(mapStateToProps, mapDispatchToProps)(RelationshipTypeEdit);