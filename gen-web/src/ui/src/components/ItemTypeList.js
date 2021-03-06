import React from 'react'
import {DataTable} from 'primereact/components/datatable/DataTable'
import {Column} from 'primereact/components/column/Column'
import {Button} from 'primereact/button';

function ItemTypeList({history, fetchItemType, fetchAllItemTypes, itemTypes, first, totalRecords}) {

    function pageAction({first, rows, page}) {
        console.log(first)
        fetchAllItemTypes('itemtypes?per_page=' + rows + '&page=' + (page + 1), first)
    }

    function buttonClicked(id) {
        fetchItemType('itemtype/' + id)
        //tell route to display the Edit screen
        history.push({pathname: '/itemType'});
    }

    function actionTemplate(rowData, column) {
        return (
            <Button id={rowData.itemTypeId} value={rowData.itemTypeId}
                    onClick={() => buttonClicked(rowData.itemTypeId)} label="Edit"/>
        )
    }

    /*
    render a table component
     */
    return (
        <div>
            <DataTable first={first} paginator={true} value={itemTypes} lazy={true} rows={10}
                       totalRecords={totalRecords}
                       onPage={pageAction} selectionMode="single">
                <Column field="itemTypeId" header="ITEMTYPEID"/>
                <Column field="itemTypeName" header="ITEMTYPENAME"/>
                <Column body={actionTemplate}/>
            </DataTable>
            <div className="centered-button-container">
                <Button id="addNewItemTypeButton" onClick={() => buttonClicked("-1")} label="Add New Item Type"/>
            </div>
        </div>
    )
};

export default ItemTypeList;