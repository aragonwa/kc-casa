import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import App from './App';
import AddPerson from './components/AddPerson';

const Routes = (props) => (
  <Router {...props}>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/add-person" component={AddPerson} />
    </div>
  </Router>
);

export default Routes;