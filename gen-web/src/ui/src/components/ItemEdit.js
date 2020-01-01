//DomainDetail-template.js
import React from 'react'
import {Dropdown} from 'primereact/dropdown';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Fieldset} from 'primereact/fieldset';
import {renderTree} from "../utils/treeRenderer";
import {Button} from "primereact/button";

function ItemEdit({history, selectedItem, onEditItem, onSaveItem, itemTypes, fetchItemAttribute, fetchRelationshipMapping, fetchItems, itemTree}) {

    if (itemTree) {
        renderTree("#itemTree", itemTree)
    }

    function buttonEventHandler(event) {
        onSaveItem('item/' + selectedItem.itemId,
            selectedItem);
        event.preventDefault();
    }

    const itemTypeOptions = itemTypes.records.map(itemType => {
        return {
            label: itemType.itemTypeName,
            value: itemType.itemTypeId
        }
    })

    function getAttributeValue(itemAttrTypeId) {
        //console.log('Lookking for ', itemAttrTypeId, selectedItem.itemAttributes)
        console.log('Getting attribute value for type', itemAttrTypeId);
        for (let index = 0; index < selectedItem.itemAttributes.length; index++) {
            console.log(selectedItem.itemAttributes[index].itemAttrType.itemAttrTypeId, itemAttrTypeId)
            if (selectedItem.itemAttributes[index].itemAttrType.itemAttrTypeId === itemAttrTypeId) {
                //we return the display value if it contains something
                return selectedItem.itemAttributes[index].itemAttrDisplayValue ||
                    selectedItem.itemAttributes[index].itemAttrValue;
            }
        }
        return "";
    }

    function getAttributeId(itemAttrTypeId) {
        //console.log('Lookking for ', itemAttrTypeId, selectedItem.itemAttributes)
        for (let index = 0; index < selectedItem.itemAttributes.length; index++) {
            console.log(selectedItem.itemAttributes[index].itemAttrType.itemAttrTypeId, itemAttrTypeId)
            if (selectedItem.itemAttributes[index].itemAttrType.itemAttrTypeId === itemAttrTypeId) {
                return selectedItem.itemAttributes[index].itemAttrId;
            }
        }
        return "-1";
    }


    async function editItemAttribute(itemAttributeId, itemAttrTypeId, itemId, lookupItemTypeId) {
        //alert(itemAttributeId);
        await fetchItemAttribute('itemattribute/' + itemAttributeId + "/" + itemAttrTypeId + "/" + itemId)
        fetchItems('items/' + lookupItemTypeId)
        history.push({pathname: '/itemattribute'});
    }

    const itemAttributeRows = selectedItem.itemType.itemAttributeTypesForItemTypeId.map((attribute, index) => {
        return (
            <Row key={attribute.itemAttrTypeId}>
                <Col>{attribute.itemAttrTypeName}</Col>
                <Col>
                    <input className="form-control" name={"itemAttributes." + index + ".itemAttrValue"}
                           value={getAttributeValue(attribute.itemAttrTypeId)}
                           readOnly={true}/>
                </Col>
                <Col>
                    <Button label="Edit" onClick={() => editItemAttribute(getAttributeId(attribute.itemAttrTypeId), attribute.itemAttrTypeId, selectedItem.itemId,
                        attribute.itemTypeIdForLookup)}/>
                </Col>
            </Row>
        )
    });

    function addOrEditRelationshipMapping(sourceItemId, targetItemId, relationshipId) {
        fetchRelationshipMapping('relationshipmapping/' + sourceItemId + "/" + targetItemId + "/" + relationshipId)
        history.push({pathname: '/relationshipmapping'});
    }

    const relationshipRows = selectedItem.relationshipMappingsForSourceItemId.map(relMapping => {
        return (
            <Row key={relMapping.id.relId}>
                <Col>{relMapping.relationship.relationshipType.relTypeName}</Col>
                <Col>{relMapping.itemByTargetItemId.itemName}</Col>
                <Col>
                    <Button label="Edit" onClick={() => addOrEditRelationshipMapping(selectedItem.itemId, relMapping.itemByTargetItemId.itemId, relMapping.relationship.relId)}/>
                </Col>
            </Row>
        )
    })


    return (
        <div>
            <div className="form-group">
                <label htmlFor="itemCode">Item Code</label>
                <input className="form-control" id="itemCode" name="itemCode" value={selectedItem.itemCode}
                       onChange={onEditItem}/>
            </div>
            <div className="form-group">
                <label htmlFor="itemName">Item Name</label>
                <input className="form-control" id="itemName" name="itemName" value={selectedItem.itemName}
                       onChange={onEditItem}/>
            </div>

            <div className="form-group">
                <label htmlFor="itemType">Item Type</label>
                <Dropdown name="itemType.itemTypeId" id="itemType" value={selectedItem.itemType.itemTypeId}
                          options={itemTypeOptions} onChange={onEditItem} className="form-control"/>
            </div>

            <Row>
                <Col xs={7}>
                    <Fieldset legend="Attributes">
                        {itemAttributeRows}
                    </Fieldset>
                    <Fieldset legend="Relationships">
                        {relationshipRows}
                        <Button label="Add Relationship" onClick={() => addOrEditRelationshipMapping(selectedItem.itemId, -1, -1)}/>
                    </Fieldset>
                </Col>
                <Col xs={5}>
                    <Fieldset legend="Tree">
                        <div id="itemTree"></div>
                    </Fieldset>
                </Col>
            </Row>

            <button id="saveButton" onClick={buttonEventHandler}>Save</button>

        </div>
    );
}

export default ItemEdit;