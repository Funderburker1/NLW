import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import PetsMap from './pages/PetsMaps';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={PetsMap} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;