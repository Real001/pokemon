import React from 'react';
import { Route } from 'react-router-dom';
import { Router, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import Main from '../views/Main';
import PageNotFound from '../components/PageNotFound';


const history = createBrowserHistory();

const AppRouter: React.FC = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  </Router>
);

export default AppRouter;
