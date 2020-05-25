import React, {Component, FC} from 'react';

import './App.scss';

import {Header} from './components/Header';
import {TodoList} from './components/TodoList';
import {withLoader} from './components/WithLoader';
import {withStorage} from './components/WithStorage';

const TodoListFCWithStorage = withStorage(TodoList);
const TodoListFCWithStorageAndLoader = withLoader(TodoListFCWithStorage);

export const App: FC = () => {
  return (
    <div>
      <Header />
      <TodoListFCWithStorageAndLoader />
    </div>
  );
};
