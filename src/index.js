import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';
import {Provider} from 'mobx-react'
import './utils/axios'


import App from './layouts/App'
import {BrowserRouter,Route} from 'react-router-dom'


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route component={App} key='a' />
        </BrowserRouter>
    </Provider>

    , 

    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

