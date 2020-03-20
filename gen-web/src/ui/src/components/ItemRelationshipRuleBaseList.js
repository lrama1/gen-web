import React from 'react'
import {DataTable} from 'primereact/components/datatable/DataTable'
import {Column} from 'primereact/components/column/Column'

function ItemRelationshipRuleBaseList({history, fetchItemRelationshipRuleBase, fetchAllItemRelationshipRuleBases, itemRelationshipRuleBases, first, totalRecords}){

    function pageAction({first,rows, page}){
        console.log(first)
        fetchAllItemRelationshipRuleBases('itemrelationshiprulebases?per_page=' + rows + '&page=' + (page+1), first )
    }
    
    function buttonClicked(id){
        fetchItemRelationshipRuleBase('itemrelationshiprulebase/' + id)
        //tell route to display the Edit screen
        history.push({pathname: '/itemRelationshipRuleBase'});
    }

    function actionTemplate(rowData, column){
        return (
            <button id={rowData.itemRelRuleBaseId} value={rowData.itemRelRuleBaseId} onClick={() =>buttonClicked(rowData.itemRelRuleBaseId)}>Edit</button>
        )
    }
       
    /*
    render a table component
     */
    return (
        <div>
            <DataTable first={first} paginator={true} value={itemRelationshipRuleBases} lazy={true} rows={10} totalRecords={totalRecords}
                onPage={pageAction} selectionMode="single">
                    <Column field="itemRelRuleBaseId" header="ITEMRELRULEBASEID"/>
                    <Column field="sourceItemTypeId" header="SOURCEITEMTYPEID"/>
                    <Column field="targetItemTypeId" header="TARGETITEMTYPEID"/>
                    <Column field="relTypeId" header="RELTYPEID"/>
                    <Column field="itemRelRuleBaseDesc" header="ITEMRELRULEBASEDESC"/>
                    <Column field="repeatLowerBound" header="REPEATLOWERBOUND"/>
                    <Column field="repeatUpperBound" header="REPEATUPPERBOUND"/>
                    <Column body={actionTemplate}/>
            </DataTable>
            <button onClick={()=> buttonClicked("-1")}>Add New Rule</button>
        </div>
    )
};

export default ItemRelationshipRuleBaseList;