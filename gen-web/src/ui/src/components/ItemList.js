import React from 'react'
import {DataTable} from 'primereact/components/datatable/DataTable'
import {Column} from 'primereact/components/column/Column'
import {Button} from 'primereact/button';

function ItemList({history, fetchItem, fetchAllItems, items, first, totalRecords}) {

    function pageAction({first, rows, page}) {
        console.log(first)
        fetchAllItems('items?per_page=' + rows + '&page=' + (page + 1), first)
    }

    function buttonClicked(id) {
        fetchItem('item/' + id)
        //tell route to display the Edit screen
        history.push({pathname: '/item'});
    }

    function actionTemplate(rowData, column) {
        return (
            <Button id={rowData.itemId} value={rowData.itemId}
                    onClick={() => buttonClicked(rowData.itemId)} label="Edit"/>
        )
    }

    /*
    render a table component
     */
    return (
        <div>
            <DataTable first={first} paginator={true} value={items} lazy={true} rows={10} totalRecords={totalRecords}
                       onPage={pageAction} selectionMode="single">
                <Column field="itemId" header="ITEMID"/>
                <Column field="itemCode" header="ITEMCODE"/>
                <Column field="itemName" header="ITEMNAME"/>
                <Column body={actionTemplate}/>
            </DataTable>
            <div className="centered-button-container">
                <Button label="Add New Item" onClick={() => buttonClicked("-1")}/>

            </div>
        </div>
    )
};

export default ItemList;