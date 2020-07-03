import React, {FC} from 'react';

import {TodoItem} from './TodoItem';
import NewTodo from './NewTodo';

import {ITodo} from '../types/types';

interface IProps {
  todos: ITodo[];
}

interface IHandlers {
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  load: (key: string, loadStorage: (key: string) => string) => string;
  save: (key: string, data: ITodo[], saveFn: (key: string, data: string) => void) => void;
  remove: (key: string, removeFn: (key: string) => void) => void;
  loadStorage: (key: string) => string;
  saveStorage: (key: string, data: string) => void;
  removeStorage: (key: string) => void;
}

export const TodoList: FC<IProps & IHandlers> = ({
  todos,
  toggleTodo,
  removeTodo,
  load,
  save,
  loadStorage,
  saveStorage,
}) => {
  if (!todos.length && loadStorage) {
    load('todos', loadStorage);
  }

  if (todos.length && saveStorage) {
    save('todos', todos, saveStorage);
  }

  return (
    <div>
      <div className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            item={todo}
            onChange={() => toggleTodo(todo.id)}
            onDoubleClick={() => removeTodo(todo.id)}
          />
        ))}
      </div>
      <NewTodo />
    </div>
  );
};
