//DomainDetail-template.js
import React from 'react'
import {Dropdown} from "primereact/dropdown";

function ItemRelationshipRuleBaseEdit({selectedItemRelationshipRuleBase, onEditItemRelationshipRuleBase, onSaveItemRelationshipRuleBase, itemTypes,relationshipTypes}) {

    function buttonEventHandler(event) {
        onSaveItemRelationshipRuleBase('itemrelationshiprulebase/' + selectedItemRelationshipRuleBase.itemRelRuleBaseId,
            selectedItemRelationshipRuleBase);
        event.preventDefault();
    }

    const itemTypeOptions = itemTypes.records.map(itemType => {
        return {
            label: itemType.itemTypeName,
            value: itemType.itemTypeId
        }
    })

    const relTypeOptions = relationshipTypes.records.map(relType => {
        return {
            label: relType.relTypeName,
            value: relType.relTypeId
        }
    })

    return (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="itemRelRuleBaseId">itemRelRuleBaseId</label>
                    <input className="form-control" id="itemRelRuleBaseId" name="itemRelRuleBaseId"
                           value={selectedItemRelationshipRuleBase.itemRelRuleBaseId}
                           onChange={onEditItemRelationshipRuleBase}/>
                </div>
                <div className="form-group">
                    <label htmlFor="sourceItemTypeId">sourceItemTypeId</label>
                    {
                        /*<input className="form-control" id="sourceItemTypeId" name="sourceItemTypeId"
                           value={selectedItemRelationshipRuleBase.sourceItemTypeId}
                           onChange={onEditItemRelationshipRuleBase}/>
                           */}

                    <Dropdown name="sourceItemType.itemTypeId" id="sourceItemType" value={selectedItemRelationshipRuleBase.sourceItemType.itemTypeId}
                              options={itemTypeOptions} onChange={onEditItemRelationshipRuleBase} className="form-control"/>

                </div>
                <div className="form-group">
                    <label htmlFor="targetItemTypeId">targetItemTypeId</label>
                    {/*<input className="form-control" id="targetItemTypeId" name="targetItemTypeId"
                           value={selectedItemRelationshipRuleBase.targetItemTypeId}
                           onChange={onEditItemRelationshipRuleBase}/>*/}

                    <Dropdown name="targetItemType.itemTypeId" id="targetItemType" value={selectedItemRelationshipRuleBase.targetItemType.itemTypeId}
                              options={itemTypeOptions} onChange={onEditItemRelationshipRuleBase} className="form-control"/>

                </div>
                <div className="form-group">
                    <label htmlFor="relTypeId">relTypeId</label>
                    {/*<input className="form-control" id="relTypeId" name="relTypeId"
                           value={selectedItemRelationshipRuleBase.relTypeId}
                           onChange={onEditItemRelationshipRuleBase}/>*/}
                    <Dropdown name="relationshipType.relTypeId" id="relationshipType" value={selectedItemRelationshipRuleBase.relationshipType.relTypeId}
                              options={relTypeOptions} onChange={onEditItemRelationshipRuleBase} className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="itemRelRuleBaseDesc">itemRelRuleBaseDesc</label>
                    <input className="form-control" id="itemRelRuleBaseDesc" name="itemRelRuleBaseDesc"
                           value={selectedItemRelationshipRuleBase.itemRelRuleBaseDesc}
                           onChange={onEditItemRelationshipRuleBase}/>
                </div>
                <div className="form-group">
                    <label htmlFor="repeatLowerBound">repeatLowerBound</label>
                    <input className="form-control" id="repeatLowerBound" name="repeatLowerBound"
                           value={selectedItemRelationshipRuleBase.repeatLowerBound}
                           onChange={onEditItemRelationshipRuleBase}/>
                </div>
                <div className="form-group">
                    <label htmlFor="repeatUpperBound">repeatUpperBound</label>
                    <input className="form-control" id="repeatUpperBound" name="repeatUpperBound"
                           value={selectedItemRelationshipRuleBase.repeatUpperBound}
                           onChange={onEditItemRelationshipRuleBase}/>
                </div>

                <button id="saveButton" onClick={buttonEventHandler}>Save</button>
            </form>
        </div>
    );
}

export default ItemRelationshipRuleBaseEdit;