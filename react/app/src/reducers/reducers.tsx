import {combineReducers} from 'redux';

import {todos} from './todos';
import {isLoading} from './isLoading';

const reducers = combineReducers({
  todos,
  isLoading,
});

export {reducers};
