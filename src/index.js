import React from 'react';
import ReactDOM from 'react-dom';
// import QueueAnim from 'rc-queue-anim';
import './utils/axios'


import App from './layouts/App'
import {BrowserRouter,Route} from 'react-router-dom'


ReactDOM.render(
    
    <BrowserRouter>
        {/* <QueueAnim > */}
            <Route component={App} key='a' />
        {/* </QueueAnim> */}
    </BrowserRouter>

    , 

    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

