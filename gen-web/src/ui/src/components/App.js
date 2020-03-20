import React from 'react';
import {HashRouter, Route, Link} from 'react-router-dom';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Container from 'react-bootstrap/Container'

import ItemListContainer from '../containers/ItemListContainer';
import ItemEditContainer from '../containers/ItemEditContainer';
import Home from './Home';
import ItemTypeListContainer from '../containers/ItemTypeListContainer';
import ItemTypeEditContainer from '../containers/ItemTypeEditContainer';
import ItemAttributeTypeListContainer from '../containers/ItemAttributeTypeListContainer';
import ItemAttributeTypeEditContainer from '../containers/ItemAttributeTypeEditContainer';
import ItemAttrTypeDatatypeListContainer from '../containers/ItemAttrTypeDatatypeListContainer';
import ItemAttrTypeDatatypeEditContainer from '../containers/ItemAttrTypeDatatypeEditContainer';
import ItemAttributeListContainer from '../containers/ItemAttributeListContainer';
import ItemAttributeEditContainer from '../containers/ItemAttributeEditContainer';
import RelationshipTypeListContainer from '../containers/RelationshipTypeListContainer';
import RelationshipTypeEditContainer from '../containers/RelationshipTypeEditContainer';
import RelationshipListContainer from '../containers/RelationshipListContainer';
import RelationshipEditContainer from '../containers/RelationshipEditContainer';
import RelationshipMappingListContainer from '../containers/RelationshipMappingListContainer';
import RelationshipMappingEditContainer from '../containers/RelationshipMappingEditContainer';
import ItemRelationshipRuleBaseListContainer from '../containers/ItemRelationshipRuleBaseListContainer';
import ItemRelationshipRuleBaseEditContainer from '../containers/ItemRelationshipRuleBaseEditContainer';



function App(props) {

    return (
        <HashRouter>
            <Container>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home</Link> <span className="sr-only">(current)</span>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/items"
                                      onClick={() => props.fetchAllItems('items?page=1&per_page=10')}>Items</Link>
                            </li>
                            <li><Link className="nav-link" to="/itemtypes"
                                      onClick={() => props.fetchAllItemTypes('/itemtypes?page=1&per_page=10')}>ItemType</Link>
                            </li>
                            <li><Link className="nav-link" to="/itemattrtypedatatypes"
                                      onClick={() => props.fetchAllItemAttrTypeDatatypes('/itemattrtypedatatypes?page=1&per_page=10')}>ItemAttrTypeDatatype</Link>
                            </li>
                            <li><Link className="nav-link" to="/relationshiptypes"
                                      onClick={() => props.fetchAllRelationshipTypes('/relationshiptypes?page=1&per_page=10')}>RelationshipType</Link>
                            </li>
<li><Link  className="nav-link" to="/itemrelationshiprulebases"  onClick={() => props.fetchAllItemRelationshipRuleBases('/itemrelationshiprulebases?page=1&per_page=10')} >ItemRelationshipRuleBase</Link></li>

                        </ul>

                    </div>
                </nav>

                <div className="row">
                    <div className="col-xs-12">
                        <Route path="/" exact component={Home}/>
                        <Route path="/items" exact component={ItemListContainer}/>
                        <Route path="/item" exact component={ItemEditContainer}/>
                        <Route path="/itemtypes" exact component={ItemTypeListContainer}/>
                        <Route path="/itemtype" exact component={ItemTypeEditContainer}/>
                        <Route path="/itemattributetypes" exact component={ItemAttributeTypeListContainer}/>
                        <Route path="/itemattributetype" exact component={ItemAttributeTypeEditContainer}/>
                        <Route path="/itemattrtypedatatypes" exact component={ItemAttrTypeDatatypeListContainer}/>
                        <Route path="/itemattrtypedatatype" exact component={ItemAttrTypeDatatypeEditContainer}/>
                        <Route path="/itemattributes" exact component={ItemAttributeListContainer}/>
                        <Route path="/itemattribute" exact component={ItemAttributeEditContainer}/>
                        <Route path="/relationshiptypes" exact component={RelationshipTypeListContainer}/>
                        <Route path="/relationshiptype" exact component={RelationshipTypeEditContainer}/>
                        <Route path="/relationships" exact component={RelationshipListContainer}/>
                        <Route path="/relationship" exact component={RelationshipEditContainer}/>
                        <Route path="/relationshipmappings" exact component={RelationshipMappingListContainer}/>
                        <Route path="/relationshipmapping" exact component={RelationshipMappingEditContainer}/>
<Route path="/itemrelationshiprulebases" exact component={ItemRelationshipRuleBaseListContainer}/>
<Route path="/itemrelationshiprulebase" exact component={ItemRelationshipRuleBaseEditContainer}/>
                    </div>
                </div>
            </Container>
        </HashRouter>
    );
};

export default App;
