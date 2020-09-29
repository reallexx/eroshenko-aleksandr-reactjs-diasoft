import {combineReducers} from 'redux';

import {todos, todo} from './todos';
import {isLoading, isError} from './loader';

const reducers = combineReducers({
  todos,
  todo,
  isLoading,
  isError,
});

export {reducers};
