import {combineReducers} from 'redux';

import {todos} from './todos';
import {isLoading, isError} from './loader';

const reducers = combineReducers({
  todos,
  isLoading,
  isError,
});

export {reducers};
