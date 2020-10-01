import React, {FC, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {connect, useDispatch} from 'react-redux';

import {ITodo} from '../types/types';
import {getTodo} from '../actions/actions';

export interface IProps {
  todo: ITodo;
}

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const TodoInfo: FC<IProps> = ({todo = {}}) => {
  const dispatch = useDispatch();
  const id = useQuery().get('id') || '';

  useEffect(() => {
    dispatch(getTodo(id));
  }, []);

  return (
    <div>
      <div className="todo-list todo">
        Вы хотели: {todo.caption} (добавлено {todo.date})
      </div>
    </div>
  );
};

const TodoInfoConnected = connect<{}, {}, {}, IProps>(({todo}) => ({
  todo,
}))(TodoInfo);

export {TodoInfoConnected as TodoInfo};
