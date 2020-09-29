import {ITodo} from '../types/types';

export const todos = (
  state: ITodo[] = [],
  action: {
    type: string;
    data: ITodo[];
  },
) => {
  switch (action.type) {
    case 'LOAD':
      return (state = action.data);
    default:
      return state;
  }
};

export const todo = (state: ITodo, action: {type: string; data: ITodo}) => {
  switch (action.type) {
    case 'GET_TODO':
      return action.data;
    default:
      return state || {};
  }
};
