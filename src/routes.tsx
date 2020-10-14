import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanpagesMap from './pages/OrphanpagesMap';

function Routes(){
    return (
        <BrowserRouter>
            <Route path="/" component={Landing} />
            <Route path="/app" component={OrphanpagesMap} />
        </BrowserRouter>
    );
}

export default Routes;