import {ITodo} from '../types/types';

export const addTodo = (caption: string) => ({
  type: 'ADD_TODO',
  id: Math.random(),
  caption,
  date: new Date().toLocaleDateString(),
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

export const load = (data: ITodo[]) => ({
  type: 'LOAD',
  data,
});
