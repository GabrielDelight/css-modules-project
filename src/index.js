import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
// import store from './store/store'
import oldTypeStore from './store/oldStore'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Fragment>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Fragment>
)
