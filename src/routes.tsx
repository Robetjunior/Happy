import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanpagesMap from './pages/OrphanpagesMap';

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/app" component={OrphanpagesMap} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;