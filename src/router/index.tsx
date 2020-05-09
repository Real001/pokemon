import React from 'react';
import { Route } from 'react-router-dom';
import { Router, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import Main from '../views/Main';
import PokemonInfo from '../views/PokemonInfo';
import Ability from '../views/Ability';
import PageNotFound from '../components/PageNotFound';


const history = createBrowserHistory();

const AppRouter: React.FC = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/pokemon/:name" component={PokemonInfo} />
      <Route exact path="/ability/:name" component={Ability} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  </Router>
);

export default AppRouter;
