//DomainDetail-template.js
import React from 'react';
import {Dropdown} from 'primereact/dropdown';

function RelationshipMappingEdit({selectedRelationshipMapping, onEditRelationshipMapping, onSaveRelationshipMapping, items, relationshipTypes}) {

    function buttonEventHandler(event) {
        onSaveRelationshipMapping('relationshipmapping',
            selectedRelationshipMapping);
        event.preventDefault();
    }

    const itemOptions = items.records.map(item => {
        return (
            {label: item.itemCode + '-' + item.itemName, value: item.itemId}
        )
    })

    const relTypeOptions = relationshipTypes.records.map(relType => {
        return (
            {label: relType.relTypeName, value: relType.relTypeId}
        )
    })

    return (
        <div>
            {/*<div className="form-group">
                    <label htmlFor="relId">relId</label>
                    <input className="form-control" id="relId" name="relId" value={selectedRelationshipMapping.relId}
                           onChange={onEditRelationshipMapping}/>
                </div>
                <div className="form-group">
                    <label htmlFor="sourceItemId">Source Item Id (should hide this)</label>
                    <input className="form-control" id="sourceItemId" name="sourceItemId" value={selectedRelationshipMapping.sourceItemId}
                           onChange={onEditRelationshipMapping}/>
                </div>*/}
            <div className="form-group">
                <label htmlFor="relTypeId">Relationship Type</label>
                {/*<input className="form-control" id="relTypeId" name="relTypeId"
                           value={selectedRelationshipMapping.relTypeId}
                           onChange={onEditRelationshipMapping}/>*/}
                <Dropdown name="relTypeId" value={selectedRelationshipMapping.relTypeId}
                          options={relTypeOptions} onChange={onEditRelationshipMapping} className="form-control"/>

            </div>
            <div className="form-group">
                <label htmlFor="relName">relName</label>
                <input className="form-control" id="relName" name="relName"
                       value={selectedRelationshipMapping.relName}
                       onChange={onEditRelationshipMapping}/>
            </div>
            {/*
                <div className="form-group">
                    <label htmlFor="sourceItemId">sourceItemId</label>
                    <input className="form-control" id="sourceItemId" name="sourceItemId"
                           value={selectedRelationshipMapping.sourceItemId}
                           onChange={onEditRelationshipMapping}/>
                </div>
                */}
            <div className="form-group">
                <label htmlFor="targetItemId">Target Item</label>
                {/*<input className="form-control" id="targetItemId" name="targetItemId"
                           value={selectedRelationshipMapping.targetItemId}
                           onChange={onEditRelationshipMapping}/>*/}
                <Dropdown name="targetItemId" value={selectedRelationshipMapping.targetItemId}
                          options={itemOptions} onChange={onEditRelationshipMapping} className="form-control"/>
            </div>

            <button id="saveButton" onClick={buttonEventHandler}>Save</button>
        </div>
    );
}

export default RelationshipMappingEdit;