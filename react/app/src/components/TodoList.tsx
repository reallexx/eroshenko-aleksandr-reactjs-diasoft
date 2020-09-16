import React, {FC, useEffect} from 'react';

import {TodoItem} from './TodoItem';
import {NewTodo} from './NewTodo';
import {ITodo} from '../types/types';
import {todoData} from '../todoData';

export interface IProps {
  todos: ITodo[];
}

export interface IHandlers {
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  load: (data: ITodo[]) => void;
}

export interface IStorageHandlers {
  loadStorage: (key: string) => string;
  saveStorage: (key: string, data: string) => void;
}

export const TodoList: FC<IProps & IHandlers & IStorageHandlers> = ({
  todos,
  toggleTodo,
  removeTodo,
  load,
  loadStorage,
  saveStorage,
}) => {
  useEffect(() => {
    if (!todos.length && loadStorage) {
      const data = JSON.parse(loadStorage('todos'));
      if (data && Array.isArray(data) && data.length) {
        load(data);
      } else {
        load(todoData);
      }
    }
    if (todos.length && saveStorage) {
      saveStorage('todos', JSON.stringify(todos));
    }
  });

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
