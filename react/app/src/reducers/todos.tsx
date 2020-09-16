import {ITodo} from '../types/types';

export const todos = (
  state: ITodo[] = [],
  action: {
    type: string;
    id: number;
    caption: string;
    date: string;
    data: ITodo[];
  },
) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          caption: action.caption,
          done: false,
          date: action.date,
        },
      ];
    case 'TOGGLE_TODO':
      return state.map((todo) => (todo.id === action.id ? {...todo, done: !todo.done} : todo));
    case 'REMOVE_TODO':
      return state.filter((todo) => todo.id !== action.id);
    case 'LOAD':
      return (state = action.data);
    default:
      return state;
  }
};
