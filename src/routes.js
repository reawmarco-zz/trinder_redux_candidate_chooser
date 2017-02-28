import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/home';
import Approved from './components/approveds';
import Rejected from './components/reject';
import Chat from './components/chat';

export default (
  <Route path="/" component={App} >
    <IndexRoute  component={Home} />
    <Route path="/approved" component={Approved} />
    <Route path="/rejected" component={Rejected} />
    <Route path="/chat/:id" component={Chat} />
  </Route>
)
