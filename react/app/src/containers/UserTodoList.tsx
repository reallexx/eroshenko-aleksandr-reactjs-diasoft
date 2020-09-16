import {connect} from 'react-redux';
import {toggleTodo, removeTodo, load} from '../actions/actions';
import {TodoList, IProps, IHandlers} from '../components/TodoList';
import {composedWithLoader} from '../components/WithLoader';
import {withStorage} from '../components/WithStorage';

import {ITodo} from '../types/types';

const TodoListWithStorage = withStorage(
  connect<IProps, IHandlers, {}, {todos: ITodo[]}>(
    (state) => ({
      todos: state.todos,
    }),
    (dispatch) => ({
      toggleTodo: (id: number) => dispatch(toggleTodo(id)),
      removeTodo: (id: number) => dispatch(removeTodo(id)),
      load: (data: ITodo[]) => dispatch(load(data)),
    }),
  )(TodoList),
);

const TodoListWithStorageAndLoader = composedWithLoader(TodoListWithStorage);

export const UserTodoList = TodoListWithStorageAndLoader;
