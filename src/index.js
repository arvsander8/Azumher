//Dependencies
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
//Assets
import './index.css';

//Routes
import AppRoutes from './routes';

//Unknow Funtionality
import * as serviceWorker from './serviceWorker';


render(
    <Router>
        <AppRoutes />
    </Router>, 
    document.getElementById('root')
);

serviceWorker.unregister();
