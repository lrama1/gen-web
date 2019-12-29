//DomainDetail-template.js
import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import {Fieldset} from "primereact/fieldset";
import {Button} from "primereact/button";

function ItemTypeEdit({history, selectedItemType, onEditItemType, onSaveItemType, addNewItemAttributeType}) {

    function buttonEventHandler(event) {
        onSaveItemType('itemtype/' + selectedItemType.itemTypeId,
            selectedItemType);
        event.preventDefault();
    }

    function addNewItemAttributeTypeLocal(parentItemTypeId, itemAttrTypeId) {
        addNewItemAttributeType(parentItemTypeId, itemAttrTypeId);
        history.push({pathname: '/itemattributetype'});
    }

    const itemAttributeTypeHeader = (
        <Row>
            <Col>Code</Col><Col>Name</Col>
        </Row>
    )

    const itemAttributeTypeRows = selectedItemType.itemAttributeTypesForItemTypeId.map(attribute => {
        return (
            <Row key={attribute.itemAttrTypeId}>
                <Col>
                    <input id="itemAttrTypeCode" value={attribute.itemAttrTypeCode} readOnly={true}/>
                </Col>
                <Col>
                    <input id="itemAttrTypeName" value={attribute.itemAttrTypeName} readOnly={true}/>
                </Col>
                <Col>
                    <Button label="Edit" onClick={() => addNewItemAttributeTypeLocal(selectedItemType.itemTypeId, attribute.itemAttrTypeId)}/>
                </Col>
            </Row>
        )
    })

    return (
        <div>
            <div className="form-group">
                <label htmlFor="itemTypeCode">itemTypeCode</label>
                <input className="form-control" id="itemTypeCode" name="itemTypeCode"
                       value={selectedItemType.itemTypeCode}
                       onChange={onEditItemType}/>
            </div>
            <div className="form-group">
                <label htmlFor="itemTypeName">itemTypeName</label>
                <input className="form-control" id="itemTypeName" name="itemTypeName"
                       value={selectedItemType.itemTypeName}
                       onChange={onEditItemType}/>
            </div>
            <div className="form-group">
                <label htmlFor="itemTypeDesc">itemTypeDesc</label>
                <input className="form-control" id="itemTypeDesc" name="itemTypeDesc"
                       value={selectedItemType.itemTypeDesc}
                       onChange={onEditItemType}/>
            </div>
            <Fieldset legend="Attribute Types">
            {itemAttributeTypeHeader}
            {itemAttributeTypeRows}
            <button id="addNewAttributeType"
                    onClick={() => addNewItemAttributeTypeLocal(selectedItemType.itemTypeId, -1)}>Add Attr Type
            </button>
            </Fieldset>

            <button id="saveButton" onClick={buttonEventHandler}>Save</button>

        </div>
    );
}

export default ItemTypeEdit;