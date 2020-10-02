import expect from 'expect';

import {todos, todo} from '../reducers/todos';
import {isLoading, isError} from '../reducers/loader';
import {ITodo} from '../types/types';

type TodosAction = {
  type: string;
  data: ITodo[];
};

type TodoAction = {
  type: string;
  data: ITodo;
};

type isLoadingAction = {
  type: string;
  isLoading: boolean;
};

type isErrorAction = {
  type: string;
  isError: boolean;
};

const item = {
  id: 1,
  caption: 'Поесть',
  done: false,
  date: '01.01.2000',
};

const data = [item];

describe('todos reducer', () => {
  it('initial state', () => {
    expect(todos(undefined, {} as TodosAction)).toEqual([]);
  });

  it('after LOAD', () => {
    expect(
      todos([], {
        type: 'LOAD',
        data: data,
      }),
    ).toEqual(data);
  });
});

describe('todo reducer', () => {
  it('initial state', () => {
    expect(todo({} as ITodo, {} as TodoAction)).toEqual({});
  });

  it('after GET_TODO', () => {
    expect(
      todo({} as ITodo, {
        type: 'GET_TODO',
        data: item,
      }),
    ).toEqual(item);
  });
});

describe('isLoading reducer', () => {
  it('initial state', () => {
    expect(isLoading(undefined, {} as isLoadingAction)).toEqual(true);
  });

  it('after SET_IS_LOADING', () => {
    expect(
      isLoading(true, {
        type: 'SET_IS_LOADING',
        isLoading: false,
      }),
    ).toEqual(false);
  });
});

describe('isError reducer', () => {
  it('initial state', () => {
    expect(isError(undefined, {} as isErrorAction)).toEqual(false);
  });

  it('after SET_IS_ERROR', () => {
    expect(
      isError(true, {
        type: 'SET_IS_ERROR',
        isError: true,
      }),
    ).toEqual(true);
  });
});
