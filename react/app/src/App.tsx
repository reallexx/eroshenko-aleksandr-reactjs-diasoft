import React, {FC} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import './App.scss';

import {Header} from './components/Header';
import {TodoList} from './components/TodoList';
import {TodoInfo} from './components/TodoInfo';

export enum AppRoute {
  HOME = '/home',
  TODO = '/todo',
}

export const App: FC = () => {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route path={AppRoute.HOME} component={TodoList} />
          <Route path={AppRoute.TODO} component={TodoInfo} />
          <Redirect from="/" to={AppRoute.HOME} />
        </Switch>
      </Router>
    </div>
  );
};
