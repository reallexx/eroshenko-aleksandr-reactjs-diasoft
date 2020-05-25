import React, {Component, FC} from 'react';

import './App.scss';

import {Header} from './components/Header';
import {TodoList} from './components/TodoList';
import {withLoader} from './components/WithLoader';
import {withStorage} from './components/WithStorage';
import {TodoListFC} from './components/TodoListFC';
import {withLoaderFC} from './components/WithLoaderFC';
import {withStorageFC} from './components/WithStorageFC';

const TodoListWithStorage = withStorage(TodoList)
const TodoListWithStorageAndLoader = withLoader(TodoListWithStorage)
const TodoListFCWithStorage = withStorageFC(TodoListFC)
const TodoListFCWithStorageAndLoader = withLoaderFC(TodoListFCWithStorage)

export const App: FC = () => {
  return (
    <div>
      <Header />
      <TodoListFCWithStorageAndLoader />
    </div>
  );
}
