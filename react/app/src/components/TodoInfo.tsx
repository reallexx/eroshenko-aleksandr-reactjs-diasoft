import React, {FC} from 'react';
import {useLocation} from 'react-router-dom';
import {useSelector} from 'react-redux';

import {ITodo} from '../types/types';

interface RootState {
  todos: ITodo[];
}

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

export const TodoInfo: FC = () => {
  const id = useQuery().get('id');
  const todo = useSelector((state: RootState) => state.todos.filter((todo) => todo.id.toString() === id)[0]);
  return (
    <div>
      <div className="todo-list todo">
        Вы хотели: {todo.caption} (добавлено {todo.date})
      </div>
    </div>
  );
};
