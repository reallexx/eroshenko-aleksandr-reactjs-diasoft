import {connect} from 'react-redux';
import {toggleTodo, removeTodo, load, save, remove} from '../actions/actions';
import {TodoList} from '../components/TodoList';
import {composedWithLoader} from '../components/WithLoader';
import {withStorage} from '../components/WithStorage';

import {ITodo} from '../types/types';

const mapStateToProps = (state: {todos: ITodo[]}) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch: (arg0: {type: string}) => any) => ({
  toggleTodo: (id: number) => dispatch(toggleTodo(id)),
  removeTodo: (id: number) => dispatch(removeTodo(id)),
  load: (key: string, loadFn: (key: string) => string) => dispatch(load(key, loadFn)),
  save: (key: string, data: ITodo[], saveFn: (key: string, data: string) => void) => dispatch(save(key, data, saveFn)),
  remove: (key: string, removeFn: (key: string) => void) => dispatch(remove(key, removeFn)),
});

const TodoListWithStorage = withStorage(connect(mapStateToProps, mapDispatchToProps)(TodoList));
const TodoListWithStorageAndLoader = composedWithLoader(TodoListWithStorage);

export const UserTodoList = TodoListWithStorageAndLoader;
