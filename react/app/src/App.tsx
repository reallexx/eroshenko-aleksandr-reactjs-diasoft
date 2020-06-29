import React, {FC} from 'react';

import './App.scss';

import {Header} from './components/Header';
import {UserTodoList} from './containers/UserTodoList';

export const App: FC = () => {
  return (
    <div>
      <Header />
      <UserTodoList dispatch={()=>false} isLoading/>
    </div>
  );
}
