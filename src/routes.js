//Dependencies
import React from 'react';
import {Route, Switch} from 'react-router-dom';

//Components
import App from './components/App';
import About from './components/About';
import Home from './components/Home';
import Page404 from './components/Page404';

import Oreq from './components/Oreq';
import Oser from './components/Oser';
import Ocom from './components/Ocom';
import Coti from './components/Coti';
import Inve from './components/Inve';
import Repo from './components/Repo';

const AppRoutes = () =>
    <App>
        <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/" component={Home} />
            <Route exact path="/oreq" component={Oreq} />
            <Route exact path="/oser" component={Oser} />
            <Route exact path="/ocom" component={Ocom} />
            <Route exact path="/coti" component={Coti} />
            <Route exact path="/inve" component={Inve} />
            <Route exact path="/repo" component={Repo} />
            <Route component={Page404} />
           
        </Switch>
    </App>;

export default AppRoutes;
