import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Count from './routes/Count';
import Users from './routes/User';

function RouterConfig({history}) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/count" component={Count} />
      <Route path="/users" component={Users} />
    </Router>
  );
}

export default RouterConfig;
