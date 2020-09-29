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
