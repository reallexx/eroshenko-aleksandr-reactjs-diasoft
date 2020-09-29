import React, {FC, useEffect, useRef} from 'react';
import {connect, useDispatch} from 'react-redux';

import {toggleTodo, removeTodo, load} from '../actions/actions';

import {Loader} from './Loader';
import {TodoItem} from './TodoItem';
import {NewTodo} from './NewTodo';
import {ITodo} from '../types/types';
import {Error} from './Error';

export interface IProps {
  isLoading: boolean;
  isError: boolean;
  todos: ITodo[];
}

export interface IHandlers {
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  load: () => void;
}

const TodoList: FC<IProps & IHandlers> = ({isLoading = true, isError = false, todos = []}) => {
  const dispatch = useDispatch();

  let firstLook = useRef(true);
  useEffect(() => {
    if (!todos.length && firstLook.current === true) {
      dispatch(load());
      firstLook.current = false;
    }
  });

  return isLoading ? (
    <Loader />
  ) : isError ? (
    <Error />
  ) : (
    <div>
      <div className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            item={todo}
            onChange={() => dispatch(toggleTodo(todo.id))}
            onDoubleClick={() => dispatch(removeTodo(todo.id))}
          />
        ))}
      </div>
      <NewTodo />
    </div>
  );
};

const TodoListConnected = connect<{}, {}, {}, IProps>((state) => ({
  isLoading: state.isLoading,
  isError: state.isError,
  todos: state.todos,
}))(TodoList);

export {TodoListConnected as TodoList};
