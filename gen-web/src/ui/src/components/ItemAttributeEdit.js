//DomainDetail-template.js
import React from 'react'
import {Dropdown} from "primereact/dropdown";

function ItemAttributeEdit({history, selectedItemAttribute, onEditItemAttribute, onSaveItemAttribute, lookupItems}) {

    function buttonEventHandler(event) {
        onSaveItemAttribute('itemattribute/' + selectedItemAttribute.itemAttrId,
            selectedItemAttribute);
        event.preventDefault();
        history.goBack();
    }

    function renderAppropriateFieldEditor(){
        console.log('dd',selectedItemAttribute)
        if(selectedItemAttribute.itemAttrType.itemTypeIdForLookup){
            const lookupItemOptions = lookupItems.map(item => {
                return {
                    label: item.itemName,
                    value: item.itemId
                }
            })
            return(
                <Dropdown name="itemAttrValue" value={selectedItemAttribute.itemAttrValue}
                          options={lookupItemOptions} onChange={onEditItemAttribute}/>
            )
        }else{
            return(
                <input className="form-control" id="itemAttrValue" name="itemAttrValue"
                       value={selectedItemAttribute.itemAttrValue}
                       onChange={onEditItemAttribute}/>
            )
        }
    }

    return (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="itemAttrId">itemAttrId</label>
                    <input className="form-control" id="itemAttrId" name="itemAttrId"
                           value={selectedItemAttribute.itemAttrId}
                           onChange={onEditItemAttribute}/>
                </div>
                <div className="form-group">
                    <label htmlFor="itemAttrValue">itemAttrValue</label>
                    {renderAppropriateFieldEditor()}
                </div>

                <button id="saveButton" onClick={buttonEventHandler}>Save</button>
            </form>
        </div>
    );
}

export default ItemAttributeEdit;