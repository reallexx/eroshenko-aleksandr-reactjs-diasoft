import React, {FC, useEffect} from 'react';
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

const TodoList: FC<IProps> = ({isLoading = true, isError = false, todos = []}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(load());
  }, []);

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
