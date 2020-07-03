import {combineReducers} from 'redux';

import {todos} from './todos';
import {isLoading} from './isLoading';

export default combineReducers({
  todos,
  isLoading,
});
