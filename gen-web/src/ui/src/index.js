import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';

import AppContainer from './containers/AppContainer'
import reducers from './reducers'
import {fetchAllItemAttrTypeDatatypes} from "./actions/itemattrtypedatatype";

const store = createStore(reducers, {}, applyMiddleware(thunk) )

store.dispatch(fetchAllItemAttrTypeDatatypes('itemattrtypedatatypes', 1))

ReactDOM.render(
    <Provider store={store}>
    <AppContainer/>
    </Provider>, 
    document.querySelector("#root"));