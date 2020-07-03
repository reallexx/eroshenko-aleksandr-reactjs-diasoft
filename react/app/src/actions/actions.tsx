import {ITodo} from '../types/types';

export const addTodo = (caption: string) => ({
  type: 'ADD_TODO',
  id: Math.random(),
  caption,
});

export const toggleTodo = (id: number) => ({
  type: 'TOGGLE_TODO',
  id,
});

export const removeTodo = (id: number) => ({
  type: 'REMOVE_TODO',
  id,
});

export const setIsLoading = () => ({
  type: 'SET_IS_LOADING',
});

export const load = (key: string, fn: (key: string) => string) => ({
  type: 'LOAD',
  key,
  fn,
});

export const save = (key: string, data: ITodo[], fn: (key: string, data: string) => void) => ({
  type: 'SAVE',
  key,
  data,
  fn,
});

export const remove = (key: string, fn: (key: string) => void) => ({
  type: 'REMOVE',
  key,
  fn,
});
