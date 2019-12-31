
import {connect} from 'react-redux';
import ItemList from '../components/ItemList'
import {fetchItem, fetchAllItems, fetchItemTree} from '../actions/item';


export const mapStateToProps = (state) => {
    console.log(state);
    return {
        items: state.items.records,
        totalRecords: state.items.totalRecords,
        first: state.items.first
    };
};

export const mapDispatchToProps = (dispatch) => {
    return{
        fetchItem(url, idToEdit){
            dispatch(fetchItem(url))
            dispatch(fetchItemTree('itemtree/' + idToEdit))
        },
        fetchAllItems(url, first){
            dispatch(fetchAllItems(url, first))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);