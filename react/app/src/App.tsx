import React, {FC} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import './App.scss';

import {Header} from './components/Header';
import {UserTodoList} from './containers/UserTodoList';
import {TodoInfo} from './components/TodoInfo';

export const App: FC = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" component={UserTodoList} dispatch={() => false} isLoading />
        <Route path="/todo" component={TodoInfo} />
        <Redirect from='/' to='/home'/>
      </Switch>
    </div>
  );
};
