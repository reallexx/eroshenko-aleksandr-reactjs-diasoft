import {todoData} from '../todoData';

import {ITodo} from '../types/types';

export const todos = (
  state: ITodo[] = [],
  action: { type: string; id: number; caption: string, key: string, data: ITodo[], fn: (key: string, data: string) => void | string}) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          caption: action.caption,
          done: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      )
    case 'REMOVE_TODO':
      return state.filter(todo =>
        todo.id !== action.id
      )
    case 'LOAD':
      try {
        const data = JSON.parse(action.fn(action.key, "") as string);
        if (data && Array.isArray(data) && data.length) {
          state = data;
        } else {
          state = todoData;
        }
      } catch(e){
        state = todoData;
      }
      return state
    case 'SAVE':
      try {
        action.fn(action.key, JSON.stringify(action.data));
      } catch(e){
      }
      return state
    case 'REMOVE':
      return state
    default:
      return state
  }
}
